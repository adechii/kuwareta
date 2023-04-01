// 画面　キャンバスとWebGL 2に対応するクラス
const Render = class
{
    constructor(canvas)
    {
        this._canvas = canvas;
        const gl = canvas.getContext("webgl2");
        this._gl = gl;

        if (gl == null)
        {
            console.error(
                'WebGL 2を初期化できません。' +
                'ブラウザまたはマシンがサポートしていないか、' +
                '無効になっています。'
            );
            return;
        }

        // キャンバス用 2パス目

        // 頂点シェーダー
        const canvasVertexShaderString =
        `#version 300 es
            layout (location = 0) in vec3 position;
            layout (location = 1) in vec2 coord;
            
            out vec2 varCoord;
            
            void main(void)
            {
                varCoord = coord;
                gl_Position = vec4(position, 1.0);
            }
        `;
        // フラグメントシェーダー
        const canvasFragmentShaderString =
        `#version 300 es
            precision mediump sampler2D;
            precision mediump float;
            
            uniform sampler2D sampler;
            in vec2 varCoord;
            out vec4 outColor;
            
            void main(void)
            {
                outColor = texture(sampler, varCoord);
            }
        `;
        // 頂点シェーダーをコンパイル
        const canvasVertexShader = gl.createShader(gl.VERTEX_SHADER);
        gl.shaderSource(canvasVertexShader, canvasVertexShaderString);
        gl.compileShader(canvasVertexShader);
        if(gl.getShaderParameter(canvasVertexShader, gl.COMPILE_STATUS))
            this._canvasVertexShader = canvasVertexShader;
        else
            console.error(gl.getShaderInfoLog(canvasVertexShader));
        
        // フラグメントシェーダーをコンパイル
        const canvasFragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
        gl.shaderSource(canvasFragmentShader, canvasFragmentShaderString);
        gl.compileShader(canvasFragmentShader);
        if(gl.getShaderParameter(canvasFragmentShader, gl.COMPILE_STATUS))
            this._canvasFragmentShader = canvasFragmentShader;
        else
            console.error(gl.getShaderInfoLog(canvasFragmentShader));
        
        // シェーダープログラム
        const canvasProgram = gl.createProgram();
        gl.attachShader(canvasProgram, canvasVertexShader);
        gl.attachShader(canvasProgram, canvasFragmentShader);
        gl.linkProgram(canvasProgram);
        if(gl.getProgramParameter(canvasProgram, gl.LINK_STATUS))
        {
            gl.useProgram(canvasProgram);
            this._canvasProgram = canvasProgram;
        }
        else
            console.error(gl.getProgramInfoLog(canvasProgram));

        // 位置
        this.positionArray = 
        [
            -1.0, -1.0, 0.0,
            -1.0, 1.0 , 0.0,
            1.0 , -1.0, 0.0, 
            1.0 , 1.0 , 0.0,
        ];

        this.coordArray =
        [
            0, 0,
            0, 1,
            1, 0,
            1, 1,
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
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertexArray), gl.STATIC_DRAW);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        this._vbo = vbo;

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

        // ロケーションを取得
        this._canvasTextureLocation = gl.getUniformLocation(this._canvasProgram, 'sampler');
        this._canvasPositionLocation = gl.getAttribLocation(this._canvasProgram, 'position');
        this._canvasCoordLocation = gl.getAttribLocation(this._canvasProgram, 'coord');
        

        // ---2Dモデル---
        
        // 頂点シェーダー
        const renderVertexShaderString =
        `#version 300 es
            layout (location = 0) in vec3 position;
            layout (location = 1) in vec2 coord;
            centroid out vec2 varCoord;
            uniform mat4 matrix;
            
            void main(void)
            {
                varCoord = coord;
                gl_Position = matrix * vec4(position, 1.0);
            }
        `;
        // フラグメントシェーダー
        const renderFragmentShaderString =
        `#version 300 es
            precision mediump float;
            
            uniform sampler2D graphic;
            uniform vec4 color0;
            uniform vec4 color1;
            uniform vec4 color2;
            centroid in vec2 varCoord;
            out vec4 outColor;
            
            void main(void)
            {
                vec4 c = texture(graphic, varCoord);

                outColor.r = 
                    c.r * color0.r +
                    c.g * color1.r +
                    c.b * color2.r;
                outColor.g = 
                    c.r * color0.g +
                    c.g * color1.g +
                    c.b * color2.g;
                outColor.b = 
                    c.r * color0.b +
                    c.g * color1.b +
                    c.b * color2.b;
                outColor.a = c.a;
            }
        `;

        // 頂点シェーダーをコンパイル
        const renderVertexShader = gl.createShader(gl.VERTEX_SHADER);
        gl.shaderSource(renderVertexShader, renderVertexShaderString);
        gl.compileShader(renderVertexShader);
        if(gl.getShaderParameter(renderVertexShader, gl.COMPILE_STATUS))
            this._renderVertexShader = renderVertexShader;
        else
            console.error(gl.getShaderInfoLog(renderVertexShader));
        
        // フラグメントシェーダーをコンパイル
        const renderFragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
        gl.shaderSource(renderFragmentShader, renderFragmentShaderString);
        gl.compileShader(renderFragmentShader);
        if(gl.getShaderParameter(renderFragmentShader, gl.COMPILE_STATUS))
            this._renderFragmentShader = renderFragmentShader;
        else
            console.error(gl.getShaderInfoLog(renderFragmentShader));
        
        // シェーダープログラム
        const renderProgram = gl.createProgram();
        gl.attachShader(renderProgram, renderVertexShader);
        gl.attachShader(renderProgram, renderFragmentShader);
        gl.linkProgram(renderProgram);
        if(gl.getProgramParameter(renderProgram, gl.LINK_STATUS))
        {
            gl.useProgram(renderProgram);
            this._renderProgram = renderProgram;
        }
        else
            console.error(gl.getProgramInfoLog(renderProgram));

        // ロケーションを取得
        this._renderMatrixLocation = gl.getUniformLocation(this._renderProgram, 'matrix');
        this._renderPositionLocation = gl.getAttribLocation(this._renderProgram, 'position');
        this._renderCoordLocation = gl.getAttribLocation(this._renderProgram, 'coord');
        this._renderColor0Location = gl.getUniformLocation(this._renderProgram, 'color0');
        this._renderColor1Location = gl.getUniformLocation(this._renderProgram, 'color1');
        this._renderColor2Location = gl.getUniformLocation(this._renderProgram, 'color2');
        this._renderGraphicLocation = gl.getUniformLocation(this._renderProgram, 'graphic');

        // --- GL初期化 ---
        
        // 画面を消す
        gl.clearColor(0.0, 0.0, 0.0, 0.0);
		gl.clearDepth(1.0);
		gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        // ブレンド
        gl.blendEquationSeparate(gl.FUNC_REVERSE_SUBTRACT, gl.FUNC_ADD)
        gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE, gl.ONE, gl.ONE);
        gl.enable(gl.BLEND);

        // ■ テストのブレンド　■
        //gl.blendEquationSeparate(gl.FUNC_ADD, gl.FUNC_ADD)
        //gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE);

        // カリング
        //gl.frontFace(gl.CW);
        //gl.enable(gl.CULL_FACE);

        // 深度
        //gl.enable(gl.DEPTH_TEST);
        //gl.depthFunc(gl.LEQUAL);

    }

    // 画面描画
    flush()
    {
        const gl = this._gl;

        if(this._frameTexture != null)
        {
            gl.activeTexture(gl.TEXTURE0 + 0);
            gl.bindTexture(gl.TEXTURE_2D, this._frameTexture);
            gl.uniform1i(this.canvasTextureLocation, 0);
        }
        else return;

        if(gl.getProgramParameter(this._canvasProgram, gl.LINK_STATUS))
            gl.useProgram(this._canvasProgram);

        gl.bindBuffer(gl.ARRAY_BUFFER, this._vbo);
        
        gl.enableVertexAttribArray(this._canvasPositionLocation);
        gl.vertexAttribPointer(this._canvasPositionLocation, 3, gl.FLOAT, false, (3 + 2) * 4, 0);

        gl.enableVertexAttribArray(this._canvasCoordLocation);
        gl.vertexAttribPointer(this._canvasCoordLocation, 2, gl.FLOAT, false, (3 + 2) * 4, 3 * 4);
        
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this._ibo);

        gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);

        gl.flush();
    }

    // 画面クリア
    clear(r, g, b, a)
    {
        const gl = this._gl;
        gl.clearColor(r, g, b, a);
		gl.clearDepth(1.0);
		gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    }

    // フレーム画面クリア
    clearFrame(r, g, b, a)
    {
        const gl = this._gl;
		gl.bindFramebuffer(gl.FRAMEBUFFER, this._frameBuffer);
        gl.clearColor(r, g, b, a);
		gl.clearDepth(1.0);
		gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
		gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    }

    // 自動リサイズ登録
    registerAutoSoftResize()
    {
        window.addEventListener('resize', this.softResize.bind(this));
    }

    // 自動リサイズ解除
    releaseAutoSoftResize()
    {
        window.removeEventListener('resize', this.softResize.bind(this));
    }

    // 画面幅が変えられた　キャンバスサイズ変えないバージョン
    softResize()
    {
        const gl = this._gl;
        const canvas = this._canvas;
        const parent = canvas.parentNode;

        this.clientWidth = parent.clientWidth;
        this.clientHeight = parent.clientHeight;

        canvas.style.width = this.clientWidth + 'px';
        canvas.style.height = this.clientHeight + 'px';

    }

    // 画面幅が変えられた
    resize()
    {
        const gl = this._gl;
        const canvas = this._canvas;
        const parent = canvas.parentNode;

        this.ratio = window.devicePixelRatio || 1;
        this.clientWidth = parent.clientWidth;
        this.clientHeight = parent.clientHeight;
        this.physicalWidth = this.clientWidth * this.ratio;
        this.physicalHeight = this.clientHeight * this.ratio;

        const width = this.physicalWidth;
        const height = this.physicalHeight;

        canvas.style.width = this.clientWidth + 'px';
        canvas.style.height = this.clientHeight + 'px';
        canvas.width = width;
        canvas.height = height;

        gl.viewport(0, 0, width, height);

        // 深度バッファ用レンダーバッファ
        this._depthRenderBuffer = gl.createRenderbuffer();
        gl.bindRenderbuffer(gl.RENDERBUFFER, this._depthRenderBuffer);
        gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, width, height);

        // フレームテクスチャ
        this._frameTexture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, this._frameTexture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);

        // フレームバッファ
        this._frameBuffer = gl.createFramebuffer();
        gl.bindFramebuffer(gl.FRAMEBUFFER, this._frameBuffer);
        gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, this._depthRenderBuffer);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this._frameTexture, 0);

        // それぞれのバインドを解除
        gl.bindTexture(gl.TEXTURE_2D, null);
        gl.bindRenderbuffer(gl.RENDERBUFFER, null);
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);

    }
};


// 別ファイルにクラスを公開
export
{
    Render
};