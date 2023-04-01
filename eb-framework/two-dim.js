
import {Matrix} from './matrix.js';

// 画像
const Graphic = class
{
    // 初期化
    constructor(render)
    {
        const gl = render._gl;
        this._gl = gl;

        this._texture = gl.createTexture();
        gl.activeTexture(gl.TEXTURE0 + 0);
        gl.bindTexture(gl.TEXTURE_2D, this._texture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.bindTexture(gl.TEXTURE_2D, null);
    }

    // ソーステクスチャをセット
    setSource(source)
    {
        const gl = this._gl;

        this._image = new Image();
        const loadTexture = function()
        {
            gl.bindTexture(gl.TEXTURE_2D, this._texture);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this._image);
            gl.generateMipmap(gl.TEXTURE_2D);
            gl.bindTexture(gl.TEXTURE_2D, null);
        };
        this._image.addEventListener('load',
            loadTexture.bind(this));
        this._image.src = source;
    }
};

// スプライト
const Sprite = class
{
    constructor(render)
    {
        this._render = render;
        const gl = render._gl;
        this._gl = gl;
        this._graphic = null;

        // テクスチャ座標
        this.coordArray =
        [
            0, 1,
            0, 0,
            1, 1,
            1, 0,
        ];

        // VBO
        this._vbo = this.createVbo();

        // インデクス
        const indexArray =
        [
            0, 1, 2,
            3, 2, 1,
        ];

        // インデクスバッファーを生成する
        const ibo = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibo);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Int16Array(indexArray), gl.STATIC_DRAW);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
        this._ibo = ibo;

        // 位置の初期値
        this.left = 0.0;
        this.bottom = 0.0;
        this.near = 5.0;

        // 拡大縮小の初期値
        this.width = 64.0;
        this.height = 64.0;
        this.depth = 64.0;

        // 回転の初期値
        this.radian = 
        {
            x: 0.0,
            y: 0.0,
            z: 0.0,
        };

        // カメラの初期値
        this.perspective = 
        {
            near : 1.0,
            far : 9.0,
            size : 1.0,
        };

        this.setColor(
            [0.6, 0.6, 0.6, 1.0],
            [0.8, 0.8, 0.8, 1.0],
            [0.4, 0.4, 0.4, 1.0],
        );

        this.setScreenPerspective();
        this._updateMatrix();
        this.setScreenPerspectiveBindThis = this.setScreenPerspective.bind(this);
    }

    // スプライト描画
    draw()
    {
        const render = this._render;
        const gl = this._gl;
        
        this._updateMatrix();

        if(this._graphic != null)
        {
            gl.activeTexture(gl.TEXTURE0 + 0);
            gl.bindTexture(gl.TEXTURE_2D, this._graphic._texture);
            gl.uniform1i(render._renderGraphicLocation, 0);
        }
        else return;

        if(gl.getProgramParameter(render._renderProgram, gl.LINK_STATUS))
            gl.useProgram(render._renderProgram);

		gl.uniformMatrix4fv(render._renderMatrixLocation, false, this.matrix);

        gl.uniform4fv(render._renderColor0Location, this._color0);
        gl.uniform4fv(render._renderColor1Location, this._color1);
        gl.uniform4fv(render._renderColor2Location, this._color2);

        gl.bindBuffer(gl.ARRAY_BUFFER, this._vbo);
        
        gl.enableVertexAttribArray(render._renderPositionLocation);
        gl.vertexAttribPointer(render._renderPositionLocation, 3, gl.FLOAT, false, (3 + 2) * 4, 0);

        gl.enableVertexAttribArray(render._renderCoordLocation);
        gl.vertexAttribPointer(render._renderCoordLocation, 2, gl.FLOAT, false, (3 + 2) * 4, 3 * 4);
        
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this._ibo);

		gl.bindFramebuffer(gl.FRAMEBUFFER, render._frameBuffer);
        gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
		gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    }

    // vboの生成
    createVbo()
    {
        const gl = this._gl;

        // 位置
        this.positionArray = 
        [
            -1.0, -1.0, 0.0,
            -1.0, 1.0 , 0.0,
            1.0 , -1.0, 0.0, 
            1.0 , 1.0 , 0.0,
        ];

        // 頂点配列作成
        this.vertexArray = [];
        for(let i = 0; i < 4; i++)
        {
            this.vertexArray.push(this.positionArray[i * 3 + 0]);
            this.vertexArray.push(this.positionArray[i * 3 + 1]);
            this.vertexArray.push(this.positionArray[i * 3 + 2]);
            this.vertexArray.push(this.coordArray[i * 2 + 0]);
            this.vertexArray.push(this.coordArray[i * 2 + 1]);    
        }

        // 頂点バッファーを生成する
        const vbo = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertexArray), gl.DYNAMIC_DRAW);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        return vbo;
    }

    setRange(x, y, w, h)
    {
        // テクスチャ座標
        this.coordArray =
        [
            x, y + h,
            x, y,
            x + w, y + h,
            x + w, y,
        ];
        // VBO
        this._vbo = this.createVbo();
    }

    // グラフィックの設定
    setGraphic (graphic)
    {
        this._graphic = graphic;
    }

    // カラーの設定
    setColor (color0, color1, color2)
    {
        let c0 = new Float32Array(4);
        let c1 = new Float32Array(4);
        let c2 = new Float32Array(4);

        c0[0] = 1-color0[0];
        c0[1] = 1-color0[1];
        c0[2] = 1-color0[2];
        c0[3] = 1-color0[3];
        c1[0] = 1-color1[0];
        c1[1] = 1-color1[1];
        c1[2] = 1-color1[2];
        c1[3] = 1-color1[3];
        c2[0] = 1-color2[0];
        c2[1] = 1-color2[1];
        c2[2] = 1-color2[2];
        c2[3] = 1-color2[3];

        this._color0 = c0;
        this._color1 = c1;
        this._color2 = c2;
    }

    // 行列の更新
    _updateMatrix()
    {
        this.matrix = new Matrix();

        this.matrix.setPerspective(
            this.perspective.left,
            this.perspective.right,
            this.perspective.bottom,
            this.perspective.top,
            this.perspective.far,
            this.perspective.near,
            this.perspective.size,
        );

        this.matrix.translate(this.left, this.bottom, this.near);
        this.matrix.rotateX(this.radian.x);
        this.matrix.rotateY(this.radian.y);
        this.matrix.rotateZ(this.radian.z);
        this.matrix.scale(this.width, this.height, this.depth);
    }

    // アスペクト比を合わせる
    setScreenPerspective()
    {
        const gl = this._gl;

        let w, h;
        w = gl.canvas.width / 2;
        h = gl.canvas.height / 2;
        w *= this.perspective.size;
        h *= this.perspective.size;

        this.perspective.left = -w;
        this.perspective.right = w;
        this.perspective.bottom = -h;
        this.perspective.top = h;
        this._updateMatrix();
    }

    // 自動リサイズ登録
    registerAutoResize()
    {
        window.addEventListener('resize', this.setScreenPerspectiveBindThis);
    }

    // 自動リサイズ解除
    releaseAutoResize()
    {
        window.removeEventListener('resize', this.setScreenPerspectiveBindThis);
    }

    // 移動
    translate(left = 0, bottom = 0, near = 1)
    {
        this.left = left;
        this.bottom = bottom;
        this.near = near;
        this._updateMatrix();
    }
    // 回転X
    rotateX(radianX)
    {
        this.radian.x = radianX;
        this._updateMatrix();
    }
    // 回転Y
    rotateY(radianY)
    {
        this.radian.y = radianY;
        this._updateMatrix();
    }
    // 回転Z
    rotateZ(radianZ)
    {
        this.radian.z = radianZ;
        this._updateMatrix();
    }
    // 拡縮
    scale(width = 1, height = 1, depth = 1)
    {
        this.width = width;
        this.height = height;
        this.depth = depth;
        this._updateMatrix();
    }
};

// 別ファイルにクラスを公開
export
{
    Graphic,
    Sprite,
};