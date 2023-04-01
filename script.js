
import {EchiBoa} from './eb-framework/main.js';


// -------------------


// ラッパー
const wrapperElem = document.createElement('div');
wrapperElem.id = 'wrapper';
document.body.appendChild(wrapperElem);

// キャンバスラッパー
const cWrapperElem = document.createElement('div');
cWrapperElem.id = 'cWrapper';
wrapperElem.appendChild(cWrapperElem);

// ボタン
const kButtonLElem = document.createElement('input');
kButtonLElem.value = 'もらす';
kButtonLElem.id = 'kButtonL';
kButtonLElem.type = 'button';
kButtonLElem.className = 'button';
wrapperElem.appendChild(kButtonLElem);
const kButtonRElem = document.createElement('input');
kButtonRElem.value = 'たえる';
kButtonRElem.id = 'kButtonR';
kButtonRElem.type = 'button';
kButtonRElem.className = 'button';
wrapperElem.appendChild(kButtonRElem);

// テキスト
const dTextElem = document.createElement('div');
dTextElem.textContent = 'うまいぞ';
dTextElem.id = 'dText';
dTextElem.className = 'text';
wrapperElem.appendChild(dTextElem);
const kTextElem = document.createElement('div');
kTextElem.textContent = 'やめてえ、もれちゃうう';
kTextElem.id = 'kText';
kTextElem.className = 'text';
wrapperElem.appendChild(kTextElem);

// HTMLのキャンバス要素を取得
const canvasElem = document.createElement('canvas');
canvasElem.id = 'canvas';
canvasElem.width = 1024;
canvasElem.height= 512;
cWrapperElem.appendChild(canvasElem);


// --------------------------


// 描画画面に登録
const render = new EchiBoa.Render(canvasElem);

// リサイズ
render.softResize();
render.registerAutoSoftResize();

// ケモロリ
const kemorori = {
    graphic : new EchiBoa.Graphic(render),
    sprite : new EchiBoa.Sprite(render),
}
const doragon = {
    graphic : new EchiBoa.Graphic(render),
    sprite : new EchiBoa.Sprite(render),
}

kemorori.graphic.setSource('kemorori.png');
kemorori.sprite.setGraphic(kemorori.graphic);
kemorori.sprite.translate(-96, 120);
kemorori.sprite.scale(-32,32);
kemorori.sprite.setRange(2/4, 2/4, 1/4, 1/4);
kemorori.sprite.setColor(
    [0.8, 0.4, 0.4, 1.0],
    [1.0, 0.6, 0.6, 1.0],
    [0.6, 0.2, 0.2, 1.0],
);
doragon.graphic.setSource('doragon-sa.png');
doragon.sprite.setGraphic(doragon.graphic);
doragon.sprite.translate(0, 0);
doragon.sprite.scale(256,256);
doragon.sprite.setRange(2/4, 1/16, 1/4, 1/16);
doragon.sprite.setColor(
    [0.4, 0.8, 0.8, 1.0],
    [0.6, 1.0, 1.0, 1.0],
    [0.2, 0.6, 0.6, 1.0],
);

let koma = [0, 1, 2, 1];
let anime = 0;

kemorori.tank = 100;
kemorori.tube = 0;
kemorori.cps = 0.4;

doragon.mouth = 0;
doragon.stomach = 0;
doragon.intestine = 0;
doragon.ass = 0;
doragon.stroke = 0;
doragon.spf = 0.1;

// アニメーションループ
const animate = function ()
{
    doragon.spf += 0.00002;
    if(doragon.spf>=0.3) doragon.spf=0.1;
    kemorori.cps += 0.00002;
    if(kemorori.cps >= 1) kemorori.cps = 1.0;

    const spfR = Math.floor(doragon.spf * 10) / 10;

    anime += spfR;

    // 1ストロークした
    if (anime >= 4){
        anime -= 4;
        doragon.stroke++;

        // TANK to TUBE
        if(kemorori.tank > 0)
        {
            kemorori.tank -= kemorori.cps;
            kemorori.tube += kemorori.cps;
        }else{
            let cc = kemorori.tank;
            kemorori.tank = 0;
            kemorori.tube += cc;
        }

        // 吸い取る
        if(kemorori.tube >= 8)
        {
            let cc = kemorori.tube;
            kemorori.tube = 0;
            doragon.mouth += cc;
        }
    }



    kemorori.sprite.setRange((3-koma[Math.floor(anime)])/4, 2/4, 1/4, 1/4);
    kemorori.sprite.translate(
        -140+koma[Math.floor(anime)]*4,
        130,
    );
    doragon.sprite.setRange((1+koma[Math.floor(anime)])/4, 1/16, 1/4, 1/16);

    render.clear(1.0, 1.0, 1.0, 1.0);
    render.clearFrame(1.0, 1.0, 1.0, 1.0);

    kemorori.sprite.draw();
    doragon.sprite.draw();
    render.flush();

    requestAnimationFrame(animate);
};
animate();

