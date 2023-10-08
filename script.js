import {Kuwareta} from './k-framework/main.js';


// -------------------


// ラッパー
const wrapperElem = document.createElement('div');
wrapperElem.id = 'wrapper';
document.body.appendChild(wrapperElem);

// キャンバスラッパー
const canvasWrapperElem = document.createElement('div');
canvasWrapperElem.id = 'canvasWrapper';
wrapperElem.appendChild(canvasWrapperElem);

// 左ボタン
const buttonLElem = document.createElement('input');
buttonLElem.value = '';
buttonLElem.id = 'buttonL';
buttonLElem.type = 'button';
buttonLElem.className = 'red';
buttonLElem.style.display = 'none';
wrapperElem.appendChild(buttonLElem);

// 中ボタン
const buttonCElem = document.createElement('input');
buttonCElem.value = '';
buttonCElem.id = 'buttonC';
buttonCElem.type = 'button';
buttonCElem.className = 'red';
buttonCElem.style.display = 'none';
wrapperElem.appendChild(buttonCElem);

// 右ボタン
const buttonRElem = document.createElement('input');
buttonRElem.value = '';
buttonRElem.id = 'buttonR';
buttonRElem.type = 'button';
buttonRElem.className = 'red';
buttonRElem.style.display = 'none';
wrapperElem.appendChild(buttonRElem);

// テキスト
const textElem = document.createElement('div');
textElem.textContent = '';
textElem.id = 'text';
textElem.className = 'red';
textElem.style.display = 'none';
wrapperElem.appendChild(textElem);

// HTMLのキャンバス要素を作成
const canvasElem = document.createElement('canvas');
canvasElem.id = 'canvas';
canvasElem.width = 512;
canvasElem.height= 384;
canvasWrapperElem.appendChild(canvasElem);


// --------------------------


// 描画画面に登録
const render = new Kuwareta.Render(canvasElem);

// リサイズ
render.softResize();
render.registerAutoSoftResize();

// ケモロリ
const kemo = {
    graphic : new Kuwareta.Graphic(render),
    sprite : new Kuwareta.Sprite(render),
}
// ドラゴンさ
const dora = {
    graphic : new Kuwareta.Graphic(render),
    sprite : new Kuwareta.Sprite(render),
}

// 色
const colorArray = [
    {
        kemoColorName: 'あかいろ',
        doraColorName: '赤色',
        dragonOne: '俺',
        dragonTwo: 'お前',
        dragonDa: 'だ',
        name: 'red',
        light:  [1.0, 0.6, 0.6, 1.0],
        middle: [0.8, 0.4, 0.4, 1.0],
        dark:   [0.6, 0.2, 0.2, 1.0],
    },
    {
        kemoColorName: 'きいろ',
        doraColorName: '黄色',
        dragonOne: '俺',
        dragonTwo: 'お前',
        dragonDa: 'だ',
        name: 'yellow',
        light:  [1.0, 1.0, 0.6, 1.0],
        middle: [0.8, 0.8, 0.4, 1.0],
        dark:   [0.6, 0.6, 0.2, 1.0],
    },
    {
        kemoColorName: 'みどりいろ',
        doraColorName: '緑色',
        dragonOne: '俺',
        dragonTwo: 'お前',
        dragonDa: 'だ',
        name: 'green',
        light:  [0.6, 1.0, 0.6, 1.0],
        middle: [0.4, 0.8, 0.4, 1.0],
        dark:   [0.2, 0.6, 0.2, 1.0],
    },
    {
        kemoColorName: 'みずいろ',
        doraColorName: '水色',
        dragonOne: '俺',
        dragonTwo: 'お前',
        dragonDa: 'だ',
        name: 'cyan',
        light:  [0.6, 1.0, 1.0, 1.0],
        middle: [0.4, 0.8, 0.8, 1.0],
        dark:   [0.2, 0.6, 0.6, 1.0],
    },
    {
        kemoColorName: 'あおいろ',
        doraColorName: '青色',
        dragonOne: '俺',
        dragonTwo: 'お前',
        dragonDa: 'だ',
        name: 'blue',
        light:  [0.6, 0.6, 1.0, 1.0],
        middle: [0.4, 0.4, 0.8, 1.0],
        dark:   [0.2, 0.2, 0.6, 1.0],
    },
    {
        kemoColorName: 'むらさきいろ',
        doraColorName: '紫色',
        dragonOne: '俺',
        dragonTwo: 'お前',
        dragonDa: 'だ',
        name: 'magenta',
        light:  [1.0, 0.6, 1.0, 1.0],
        middle: [0.8, 0.4, 0.8, 1.0],
        dark:   [0.6, 0.2, 0.6, 1.0],
    },
    {
        kemoColorName: 'くろいろ',
        doraColorName: '黒色',
        dragonOne: '俺',
        dragonTwo: 'お前',
        dragonDa: 'だ',
        name: 'black',
        light:  [0.4, 0.4, 0.4, 1.0],
        middle: [0.2, 0.2, 0.2, 1.0],
        dark:   [0.0, 0.0, 0.0, 1.0],
    },
    {
        kemoColorName: 'しろいろ',
        doraColorName: '白色',
        dragonOne: 'わし',
        dragonTwo: 'お主',
        dragonDa: 'じゃ',
        name: 'white',
        light:   [1.0, 1.0, 1.0, 1.0],
        middle:  [0.8, 0.8, 0.8, 1.0],
        dark:    [0.6, 0.6, 0.6, 1.0],
    },
];

// ケモロリ
kemo.graphic.setSource('kemo.png');
kemo.sprite.setGraphic(kemo.graphic);
kemo.sprite.translate(0, -192+32);
kemo.sprite.scale(32,32);
kemo.sprite.setRange(0/4, 0/4, 1/4, 1/4);
kemo.colorNumber = Math.floor(Math.random() * 6);
kemo.sprite.setColor(
    colorArray[kemo.colorNumber].middle,
    colorArray[kemo.colorNumber].light,
    colorArray[kemo.colorNumber].dark,
);
// ドラゴンさ
dora.graphic.setSource('doragon-sa.png');
dora.sprite.setGraphic(dora.graphic);
dora.sprite.translate(512, 0);
dora.sprite.scale(192,192);
dora.sprite.setRange(0/4, 0/16, 1/4, 1/16);
dora.colorNumber = Math.floor(Math.random() * 6);
dora.sprite.setColor(
    colorArray[dora.colorNumber].middle,
    colorArray[dora.colorNumber].light,
    colorArray[dora.colorNumber].dark,
);

//------------------

// テキストとボタンを隠す
const hideTextAndButtons = function()
{

    buttonLElem.style.display = 'none';
    buttonCElem.style.display = 'none';
    buttonRElem.style.display = 'none';

    textElem.style.display = 'none';
};
// ケモ色テキストをセット
const setKemoText = function(text)
{
    doraText = false;

    buttonLElem.style.display = 'none';
    buttonCElem.style.display = 'none';
    buttonRElem.style.display = 'none';

    textElem.textContent = text;
    textElem.style.display = 'block';

    textElem.className = colorArray[kemo.colorNumber].name;
};
// ドラ色テキストをセット
const setDoraText = function(text)
{
    doraText = true;

    buttonLElem.style.display = 'none';
    buttonCElem.style.display = 'none';
    buttonRElem.style.display = 'none';

    textElem.textContent = text;
    textElem.style.display = 'block';

    textElem.className = colorArray[dora.colorNumber].name;
};
// ボタンをセット
const setButton = function(left, center, right,
    leftColor = 'kemo',
    centerColor = 'kemo',
    rightColor = 'kemo'
)
{
    textElem.style.display = 'none';

    buttonLElem.value = left;
    buttonCElem.value = center;
    buttonRElem.value = right;

    if(left)   buttonLElem.style.display = 'block'; else buttonLElem.style.display = 'none';
    if(center) buttonCElem.style.display = 'block'; else buttonCElem.style.display = 'none';
    if(right)  buttonRElem.style.display = 'block'; else buttonRElem.style.display = 'none';

    if(leftColor!=='kemo')   buttonLElem.className = leftColor;   else buttonLElem.className = colorArray[kemo.colorNumber].name;
    if(centerColor!=='kemo') buttonCElem.className = centerColor; else buttonCElem.className = colorArray[kemo.colorNumber].name;
    if(rightColor!=='kemo')  buttonRElem.className = rightColor;  else buttonRElem.className = colorArray[kemo.colorNumber].name;
};
// ランダム並べ替え
const randomArray = function(n, m)
{
    let a = new Array(n);
    for(let i=0; i<n; i++) a[i] = i;

    for(let i=0; i<m; i++)
    {
        let r = i + Math.floor(Math.random() * (n - i));
        let t = a[r];
        a[r] = a[i];
        a[i] = t;
    }

    let b = new Array(m);
    for(let i=0; i<m; i++) b[i] = a[i];

    return b;
};
// ランダム整数
const randomInt = function(n)
{
    return Math.floor(Math.random() * n);
};
// 値ループ
const loopInt = function(n, m)
{
    let t = n % m;
    while(t < 0) t += m;
    return t;
};
// ボタン押下
let leftButtonDown = false;
let centerButtonDown = false;
let rightButtonDown = false;

let firstStartButton = true;
const oscillator = [];

buttonLElem.addEventListener('pointerdown',function(e)
{
    leftButtonDown = true;
    if(firstStartButton)
    {
        oscillator[0].start();
        oscillator[1].start();
        firstStartButton = false;
    }
});
buttonCElem.addEventListener('pointerdown',function(e)
{
    centerButtonDown = true;
                if(firstStartButton)
                {
                    oscillator[0].start();
                    oscillator[1].start();
                    firstStartButton = false;
                }
});
buttonRElem.addEventListener('pointerdown',function(e)
{
    rightButtonDown = true;
                if(firstStartButton)
                {
                    oscillator[0].start();
                    oscillator[1].start();
                    firstStartButton = false;
                }
});

//------------------

// ジュース
let juice = new Array(3);
let juiceArray = randomArray(8, 3);

for(let i=0; i<3; i++)
{
    juice[i] = 
    {
        graphic : new Kuwareta.Graphic(render),
        sprite : new Kuwareta.Sprite(render),
    };
    juice[i].graphic.setSource('kemo.png');
    juice[i].sprite.setGraphic(kemo.graphic);
    juice[i].sprite.translate(512, -192+32);
    juice[i].sprite.scale(32,32);
    juice[i].sprite.setRange(2/4, 3/4, 1/4, 1/4);
    juice[i].colorNumber = juiceArray[i];
    juice[i].sprite.setColor(
        colorArray[juice[i].colorNumber].middle,
        colorArray[juice[i].colorNumber].light,
        colorArray[juice[i].colorNumber].dark,
    );
}

// バー
let bar = new Array(3);

for(let i=0; i<3; i++)
{
    bar[i] = 
    {
        graphic : new Kuwareta.Graphic(render),
        sprite : new Kuwareta.Sprite(render),
    };
    bar[i].graphic.setSource('kemo.png');
    bar[i].sprite.setGraphic(kemo.graphic);
    bar[i].sprite.translate(-236 - 8, 0);
    if(i===2) bar[i].sprite.translate(512, 0);
    bar[i].sprite.scale(8,100);
    if(i===0) bar[i].sprite.scale(8, 0);
    if(i===2) bar[i].sprite.scale(8, 0);
    bar[i].colorNumber = kemo.colorNumber;
    bar[i].sprite.setColor(
        colorArray[bar[i].colorNumber].middle,
        colorArray[bar[i].colorNumber].light,
        colorArray[bar[i].colorNumber].dark,
    );
}
bar[0].sprite.setRange(1/16, 2/4, 1/16, 1/4);
bar[1].sprite.setRange(2/16, 2/4, 1/16, 1/4);
bar[2].sprite.setRange(1/16, 2/4, 1/16, 1/4);

// 頭の悪いえっちな配列
const savore = 
[
    {
        suru: '揉む',
        sa: '揉ま',
        sare: '揉まれ',
        shi: '揉み込み',
        shite: '揉んで',
        shita: '揉んだ',
        kemoSuru: 'もむ',
        kemoSa: 'もま',
        kemoSare: 'もまれ',
        kemoShi: 'もみこみ',
        kemoShite: 'もんで',
        kemoShita: 'もんだ',
        sound0: 'も',
        sound1: 'み',
        animation: [2, 1, 0, 1],
        leakTankCc: 1,
        leakDamCc: 0.7,
    },
    {
        suru: 'しごく',
        sa: 'しごか',
        sare: 'しごかれ',
        shi: 'しごきこみ',
        shite: 'しごいて',
        shita: 'しごいた',
        kemoSuru: 'しごく',
        kemoSa: 'しごか',
        kemoSare: 'しごかれ',
        kemoShi: 'しごきこみ',
        kemoShite: 'しごいて',
        kemoShita: 'しごいた',
        sound0: 'にゅ',
        sound1: 'こ',
        animation: [3, 1, 4, 1],
        leakTankCc: 0.9,
        leakDamCc: 1.2,
    },
    {
        suru: 'こねる',
        sa: 'こね',
        sare: 'こねられ',
        shi: 'こねくりまわし',
        shite: 'こねて',
        shita: 'こねた',
        kemoSuru: 'こねる',
        kemoSa: 'こね',
        kemoSare: 'こねられ',
        kemoShi: 'こねくりまわし',
        kemoShite: 'こねて',
        kemoShita: 'こねた',
        sound0: 'も',
        sound1: 'ぬ',
        animation: [4, 2, 3, 0],
        leakTankCc: 1.1,
        leakDamCc: 0.8,
    },
    {
        suru: 'ねぶる',
        sa: 'ねぶら',
        sare: 'ねぶられ',
        shi: 'ねぶりこみ',
        shite: 'ねぶって',
        shita: 'ねぶった',
        kemoSuru: 'ねぶる',
        kemoSa: 'ねぶら',
        kemoSare: 'ねぶられ',
        kemoShi: 'ねぶりこみ',
        kemoShite: 'ねぶって',
        kemoShita: 'ねぶった',
        sound0: 'ね',
        sound1: 'ぶ',
        animation: [3, 2, 4, 0],
        leakTankCc: 1.3,
        leakDamCc: 0.5,
    },
    {
        suru: '搾る',
        sa: '搾ら',
        sare: '搾られ',
        shi: '搾り取り',
        shite: '搾って',
        shita: '搾った',
        kemoSuru: 'しぼる',
        kemoSa: 'しぼら',
        kemoSare: 'しぼられ',
        kemoShi: 'しぼりとり',
        kemoShite: 'しぼって',
        kemoShita: 'しぼった',
        sound0: 'も',
        sound1: 'ぎゅ',
        animation: [4, 0, 3, 1],
        leakTankCc: 0.7,
        leakDamCc: 1.4,
    },
    {
        suru: 'こする',
        sa: 'こすら',
        sare: 'こすられ',
        shi: 'こすりとり',
        shite: 'こすって',
        shita: 'こすった',
        kemoSuru: 'こする',
        kemoSa: 'こすら',
        kemoSare: 'こすられ',
        kemoShi: 'こすりとり',
        kemoShite: 'こすって',
        kemoShita: 'こすった',
        sound0: 'ぬ',
        sound1: 'りゅ',
        animation: [0, 3, 2, 1],
        leakTankCc: 1.2,
        leakDamCc: 0.6,
    },
    {
        suru: '吸う',
        sa: '吸わ',
        sare: '吸われ',
        shi: '吸い出し',
        shite: '吸って',
        shita: '吸った',
        kemoSuru: 'すう',
        kemoSa: 'すわ',
        kemoSare: 'すわれ',
        kemoShi: 'すいだし',
        kemoShite: 'すって',
        kemoShita: 'すった',
        sound0: 'ぬ',
        sound1: 'に',
        animation: [4, 1, 3, 2],
        leakTankCc: 0.6,
        leakDamCc: 1.5,
    },
    {
        suru: 'なめる',
        sa: 'なめ',
        sare: 'なめられ',
        shi: 'なめまわし',
        shite: 'なめて',
        shita: 'なめた',
        kemoSuru: 'なめる',
        kemoSa: 'なめ',
        kemoSare: 'なめられ',
        kemoShi: 'なめまわし',
        kemoShite: 'なめて',
        kemoShita: 'なめた',
        sound0: 'ぬ',
        sound1: 'ぷ',
        animation: [0, 1, 2, 4],
        leakTankCc: 1.4,
        leakDamCc: 0.4,
    },
];

// おもらし台詞配列
const ccCry =
[
    'からだのすいぶんは、うるおってる…。',
    'からだのすいぶんは、すこしだけへってる…。',
    'からだのすいぶんは、すこしへってる…。',
    'からだのすいぶんが、へってきた…。',
    'からだのすいぶんが、だんだんなくなってきた…。',
    'すいぶんが、なくなってきた…。',
    'すいぶんが、うばわれてきた…。',
    'すいぶんがもっとほしい…。',
    'すいぶんがほしい…。',
    'すいぶんがそろそろひつようだ…。',
    'からだのすいぶんが、すくなくなってきた…。',
    'からだのすいぶんが　もうすくない…。',
    'そろそろひからびちゃう…ジュースほしい…。',
    'ひからびそう…ジュースほしい…。',
    'だめ…ひからびる…ジュース…。',
    'もうだめ…すぐにひからびちゃう…ジュースはやく…。',
];
// 気持ちよがる台詞配列
const feelCry =
[
    'このえっちが…。',
    'ちょっときもちいかも…。',
    'すこしずつ、よくなってきた…。',
    'きもちいかも…。',
    'きもちい…。',
    'やだ、こんなに　きもちいの、…。',
    'ひいい、きもちいよ、…。',
    'やああ、きもちい、…。',
    'きもちよくて、もういやあ、…。',
    'あ、からだ　おかしくなる、もうやめて、',
    'ひい、これいじょう、やめ、でる、でるから、',
    'く、もうやめ、きもち、きもちい、',
    'いあ、だえ、やえて、とろとろしちゃ、',
    'くあ、らえ、でゆ、みつでちゃ、あ、',
    'やえ、こわれゆ、こわれゆ、あ、あ、',
    'あ、あ、あ、あ、あ、あ、',
];
// 終わった時の台詞配列
const complaint =
[
    'はあ、はあ、こんなの…。',
    'はあ、はあ、だめえ…。',
    'はあ、はあ、きもちよかった…。',
    'ひいい　きもちよかった…。',
    'こんなのむり、はあ、はあ、…。',
    'はあ、はあ、きもちよくて　もれちゃった、…。',
    'はあ、きもちよくて　でちゃった、…。',
    'ひああ、もらしたく　なかったのに、…。',
    'ひああ、だしたく　なかったのに、…。',
    'はあ、はあ、きもちよくて　がまんできないよ、…。',
    'ひい、もれちゃった、…。',
    'ひい、ひい、でちゃった、…。',
    'く、きもちい、とろとろ　もれてた、…。',
    'ひ、きもちい、とろとろ　でてた、…。',
    'もうだえ、からだ　こわれゆ、…。',
    'はあ、はあ、はあ、はあ、はあ、…。',
];

// 音
const audioCtx = new AudioContext();

const gainNode = [];

for(let i = 0 ; i < 2 ; i++)
{
    oscillator[i] = audioCtx.createOscillator();
    gainNode[i] = audioCtx.createGain();
    oscillator[i].type = 'sine';
    gainNode[i].gain.setValueAtTime(0.0, audioCtx.currentTime);
    oscillator[i].connect(gainNode[i]);
    gainNode[i].connect(audioCtx.destination);
}
let soundNumber = 0;

const sound = function(startFrequency, endFrequemcy, time)
{
    oscillator[soundNumber].frequency.linearRampToValueAtTime(startFrequency, audioCtx.currentTime + time * 0 / 12);
    oscillator[soundNumber].frequency.linearRampToValueAtTime(endFrequemcy, audioCtx.currentTime + time * 4 / 12);
    oscillator[soundNumber].frequency.linearRampToValueAtTime(startFrequency, audioCtx.currentTime + time * 5 / 12);
    oscillator[soundNumber].frequency.linearRampToValueAtTime(endFrequemcy, audioCtx.currentTime + time * 8 / 12);
    oscillator[soundNumber].frequency.linearRampToValueAtTime(startFrequency, audioCtx.currentTime + time * 9 / 12);
    oscillator[soundNumber].frequency.linearRampToValueAtTime(endFrequemcy, audioCtx.currentTime + time * 12 / 12);
    gainNode[soundNumber].gain.linearRampToValueAtTime(0.0, audioCtx.currentTime + time / 12);
    gainNode[soundNumber].gain.linearRampToValueAtTime(1.0, audioCtx.currentTime + time * 2 / 12);
    gainNode[soundNumber].gain.linearRampToValueAtTime(0.0, audioCtx.currentTime + time);
    soundNumber = (soundNumber + 1) % 2;
}

let previousTimeStamp = 0;
let animationTimeStamp = 0;
let animationElapsed = 0;
let start = true;
let elapsed = 0;

let longPlay = 1.0;
let speedPlay = 1.0;
let strongPlay = 1.0;

let tankCc = 300;
let damCc = 0;
let dragonCc = 0;
let dragonTotalCc = 0;
let feel = 1;
let leak = 0.01;
let dragonNumber = 1;

let question = -1;
let savoreArray = [0,1,2];
let currentSavore = 0;
let wantToLeak = false;

let animation = 0;
let wait = 0;

let nextDistance = 512;
let nextObject = 'dragon';
let nextRight = true;

let gameOver = false;
let dragonKeep = false;

let flushColor = false;

let stage = 'title';

let whiteDragonNumber = 5;

let doraText = false;

let milkingStage = false;

if(randomInt(2))
{
    nextObject = 'dragon';
    dora.sprite.x = Math.floor(nextDistance + 128);
}
else
{
    nextObject = 'juice';
    for(let i = 0; i<3; i++)
    {
        juice[i].sprite.x = nextDistance + 32*(i+1);
    }
}

// バー減り
const drink = function(momi)
{
    if(milkingStage) return;

    let roriLeak = 0.8;
    let shotaLeak = 0.8;
    if(kemo.rorishota === 'ケモロリ') roriLeak = 1.2;
    if(kemo.rorishota === 'ケモロリショタ') 
    {
        roriLeak = 1.2;
        shotaLeak = 1.2;
    }
    if(kemo.rorishota === 'ケモショタ') shotaLeak = 1.2;

    feel += momi*elapsed/80000 * speedPlay * strongPlay;
    if(tankCc > 256) tankCc = 256;
    if(damCc > 32)
    {
        dragonCc += damCc - 32;
        dragonTotalCc += damCc - 32;
        damCc = 32;
    }
    let c = Math.min(elapsed/10000*momi * feel * savore[currentSavore].leakTankCc * speedPlay * strongPlay * roriLeak, tankCc);
    tankCc -= c;
    damCc += c;
    let d = elapsed/10000*momi*feel * savore[currentSavore].leakDamCc * shotaLeak;
    damCc -= d;
    dragonCc += d;
    dragonTotalCc += d;
    if(damCc < 0)
    {
        tankCc += damCc;
        damCc = 0;
    }
    if(tankCc < 0)
    {
        dragonCc += tankCc;
        dragonTotalCc += tankCc;
        tankCc = 0;
    }
    bar[0].sprite.y = Math.round(-192 + tankCc) / 2;
    bar[1].sprite.y = Math.round(-192 - damCc) / 2;
    bar[2].sprite.y = Math.round(-192 + dragonTotalCc) / 2;
    bar[0].sprite.scale(4, Math.round(tankCc) / 2);
    bar[1].sprite.scale(4, Math.round(damCc) / 2);
    bar[2].sprite.scale(4, Math.round(dragonTotalCc) / 2);

    if(
        dragonTotalCc >= 48 &&
        dora.colorNumber !== kemo.colorNumber &&
        dora.colorNumber < 6 &&
        kemo.colorNumber < 6 &&
        !flushColor
    )
    {
        flushColor = true;

        dora.colorNumber = kemo.colorNumber;
        dora.sprite.setColor(
            colorArray[dora.colorNumber].middle,
            colorArray[dora.colorNumber].light,
            colorArray[dora.colorNumber].dark,
        );
        if(doraText) textElem.className = colorArray[dora.colorNumber].name;
    }
};

// --------------------------------

const draw = function()
{
    // 白く画面を塗りつぶす
    render.clear(1.0, 1.0, 1.0, 1.0);
    render.clearFrame(1.0, 1.0, 1.0, 1.0);

    // 描画
    kemo.sprite.draw();
    juice[0].sprite.draw();
    juice[1].sprite.draw();
    juice[2].sprite.draw();
    bar[0].sprite.draw();
    bar[1].sprite.draw();
    bar[2].sprite.draw();
    dora.sprite.draw();

    // 全て描画
    render.flush();
};

const animate = function (timeStamp)
{
    // 経過時間を計算
    if(start)
    {
        elapsed = 0;
        animationTimeStamp = timeStamp;
        start = false;
    }
    else
    {
        elapsed = timeStamp - previousTimeStamp;
        animationElapsed = timeStamp - animationTimeStamp;
    }

    // 待ち時間
    if(0 < wait)
    {
        wait -= elapsed;

        if(leftButtonDown) sound(880, 220, 0.2);
        if(centerButtonDown) sound(880, 220, 0.2);
        if(rightButtonDown) sound(880, 220, 0.2);

        // はじめるボタン
        if(stage === 'start')
        {
            if(leftButtonDown) kemo.rorishota = 'ケモロリ';
            if(centerButtonDown) kemo.rorishota = 'ケモロリショタ';
            if(rightButtonDown) kemo.rorishota = 'ケモショタ';
            if(
                leftButtonDown ||
                centerButtonDown ||
                rightButtonDown
            )
            {
                const r = randomInt(8);
                if(r===0) setKemoText('いこう。');
                if(r===1) setKemoText('もらさないように　しなきゃ。');
                if(r===2) setKemoText('くろいろのドラゴンさんに　あわないといいけど…。');
                if(r===3) setKemoText('しろいろのドラゴンさんに　あいたいな。');
                if(r===4) setKemoText('また　たべられるんだ…。');
                if(r===5) setKemoText('がんばろう。');
                if(r===6) setKemoText('おもらし　しないように　しなきゃ。');
                if(r===7) setKemoText('いかなきゃ。');


                leftButtonDown = false;
                centerButtonDown = false;
                rightButtonDown = false;
                wait = 0;
                stage = 'walk';
            }
        }
        // ジュース選び
        if(stage === 'selectJuice')
        {
            if(leftButtonDown)
            {
                kemo.colorNumber = juice[0].colorNumber;
                bar[0].colorNumber = juice[0].colorNumber;
                bar[1].colorNumber = juice[0].colorNumber;
                setKemoText(colorArray[juice[0].colorNumber].kemoColorName + 'のジュースをのんだ。おいしかった。');
                kemo.sprite.setColor(
                    colorArray[kemo.colorNumber].middle,
                    colorArray[kemo.colorNumber].light,
                    colorArray[kemo.colorNumber].dark,
                );
                bar[0].sprite.setColor(
                    colorArray[kemo.colorNumber].middle,
                    colorArray[kemo.colorNumber].light,
                    colorArray[kemo.colorNumber].dark,
                );
                bar[1].sprite.setColor(
                    colorArray[kemo.colorNumber].middle,
                    colorArray[kemo.colorNumber].light,
                    colorArray[kemo.colorNumber].dark,
                );
                bar[2].sprite.setColor(
                    colorArray[kemo.colorNumber].middle,
                    colorArray[kemo.colorNumber].light,
                    colorArray[kemo.colorNumber].dark,
                );
                tankCc += randomInt(32)+64;
                drink(0);
                juice[0].sprite.x = -512;
                leftButtonDown = false;
                nextRight = false;
                wait = 0;
                
                stage = 'walk';
            }
            else if(centerButtonDown)
            {
                kemo.colorNumber = juice[1].colorNumber;
                bar[0].colorNumber = juice[1].colorNumber;
                bar[1].colorNumber = juice[1].colorNumber;
                setKemoText(colorArray[juice[1].colorNumber].kemoColorName + 'のジュースをのんだ。おいしかった。');
                kemo.sprite.setColor(
                    colorArray[kemo.colorNumber].middle,
                    colorArray[kemo.colorNumber].light,
                    colorArray[kemo.colorNumber].dark,
                );
                bar[0].sprite.setColor(
                    colorArray[kemo.colorNumber].middle,
                    colorArray[kemo.colorNumber].light,
                    colorArray[kemo.colorNumber].dark,
                );
                bar[1].sprite.setColor(
                    colorArray[kemo.colorNumber].middle,
                    colorArray[kemo.colorNumber].light,
                    colorArray[kemo.colorNumber].dark,
                );
                bar[2].sprite.setColor(
                    colorArray[kemo.colorNumber].middle,
                    colorArray[kemo.colorNumber].light,
                    colorArray[kemo.colorNumber].dark,
                );
                tankCc += randomInt(32)+64;
                drink(0);
                juice[1].sprite.x = -512;
                centerButtonDown = false;
                nextRight = false;
                wait = 0;
                
                stage = 'walk';
            }
            else if(rightButtonDown)
            {
                kemo.colorNumber = juice[2].colorNumber;
                bar[0].colorNumber = juice[2].colorNumber;
                bar[1].colorNumber = juice[2].colorNumber;
                setKemoText(colorArray[juice[2].colorNumber].kemoColorName + 'のジュースをのんだ。おいしかった。');
                kemo.sprite.setColor(
                    colorArray[kemo.colorNumber].middle,
                    colorArray[kemo.colorNumber].light,
                    colorArray[kemo.colorNumber].dark,
                );
                bar[0].sprite.setColor(
                    colorArray[kemo.colorNumber].middle,
                    colorArray[kemo.colorNumber].light,
                    colorArray[kemo.colorNumber].dark,
                );
                bar[1].sprite.setColor(
                    colorArray[kemo.colorNumber].middle,
                    colorArray[kemo.colorNumber].light,
                    colorArray[kemo.colorNumber].dark,
                );
                bar[2].sprite.setColor(
                    colorArray[kemo.colorNumber].middle,
                    colorArray[kemo.colorNumber].light,
                    colorArray[kemo.colorNumber].dark,
                );
                tankCc += randomInt(32)+64;
                drink(0);
                juice[2].sprite.x = -512;
                rightButtonDown = false;
                nextRight = false;
                wait = 0;
                
                stage = 'walk';
            }
            else if(wait <= 0)
            {
                setKemoText('まあいいや。');
                
                stage = 'walk';
            }
        }
        if(
            stage === 'selectMouth' ||
            stage === 'selectStomach' ||
            stage === 'selectCrotch' ||
            stage === 'selectHip'
        )
        {
            if(question===0)
            {
                if(leftButtonDown)
                {
                    if(stage === 'selectMouth') stage = 'savore0Mouth';
                    if(stage === 'selectStomach') stage = 'savore0Stomach';
                    if(stage === 'selectCrotch') stage = 'savore0Crotch';
                    if(stage === 'selectHip') stage = 'savore0Hip';
                    leak = 0.2;
                    wait = 0;
                    leftButtonDown = false;
                }
                else if(centerButtonDown)
                {
                    if(stage === 'selectMouth') stage = 'savore0Mouth';
                    if(stage === 'selectStomach') stage = 'savore0Stomach';
                    if(stage === 'selectCrotch') stage = 'savore0Crotch';
                    if(stage === 'selectHip') stage = 'savore0Hip';
                    leak = 0.6;
                    wait = 0;
                    centerButtonDown = false;
                }
                else if(rightButtonDown)
                {
                    if(stage === 'selectMouth') stage = 'savore0Mouth';
                    if(stage === 'selectStomach') stage = 'savore0Stomach';
                    if(stage === 'selectCrotch') stage = 'savore0Crotch';
                    if(stage === 'selectHip') stage = 'savore0Hip';
                    leak = 0.8;
                    wait = 0;
                    rightButtonDown = false;
                }
                else if(wait <= 0)
                {
                    if(stage === 'selectMouth') stage = 'savore0Mouth';
                    if(stage === 'selectStomach') stage = 'savore0Stomach';
                    if(stage === 'selectCrotch') stage = 'savore0Crotch';
                    if(stage === 'selectHip') stage = 'savore0Hip';
                    leak = 0.6;
                }
            }
            else if(question===1)
            {
                if(leftButtonDown)
                {
                    if(stage === 'selectMouth') stage = 'savore0Mouth';
                    if(stage === 'selectStomach') stage = 'savore0Stomach';
                    if(stage === 'selectCrotch') stage = 'savore0Crotch';
                    if(stage === 'selectHip') stage = 'savore0Hip';
                    strongPlay -= 0.2;
                    wait = 0;
                    leftButtonDown = false;
                }
                else if(centerButtonDown)
                {
                    if(stage === 'selectMouth') stage = 'savore0Mouth';
                    if(stage === 'selectStomach') stage = 'savore0Stomach';
                    if(stage === 'selectCrotch') stage = 'savore0Crotch';
                    if(stage === 'selectHip') stage = 'savore0Hip';
                    speedPlay -= 0.2;
                    wait = 0;
                    centerButtonDown = false;
                }
                else if(rightButtonDown)
                {
                    if(stage === 'selectMouth') stage = 'savore0Mouth';
                    if(stage === 'selectStomach') stage = 'savore0Stomach';
                    if(stage === 'selectCrotch') stage = 'savore0Crotch';
                    if(stage === 'selectHip') stage = 'savore0Hip';
                    longPlay -= 0.2;
                    wait = 0;
                    rightButtonDown = false;
                }
                else if(wait <= 0)
                {
                    if(stage === 'selectMouth') stage = 'savore0Mouth';
                    if(stage === 'selectStomach') stage = 'savore0Stomach';
                    if(stage === 'selectCrotch') stage = 'savore0Crotch';
                    if(stage === 'selectHip') stage = 'savore0Hip';
                }
            }
        }
        // ドラゴンを起こすか無視するか蹴るか
        else if(stage === 'selectEatenOrKickOrIgnore')
        {
            if(leftButtonDown)
            {
                let r = randomInt(5);
                if(r===0)
                {
                    stage = 'eatenSoft';
                    setDoraText('わざわざ起こしてくれたのか。やさしめに味わってやろう。');
                    strongPlay -= 0.2;
                    kemo.sprite.setRange(2/4, 1/4, 1/4, 1/4);
                    dora.sprite.setRange(1/4, 0/16, 1/4, 1/16);
                    dora.sprite.translate(0,0);
                    kemo.sprite.translate(-128,-48);
                    bar[2].sprite.translate(244, 0);
                }
                else if(r===1)
                {
                    stage = 'eatenSoft';
                    setDoraText('わざわざ起こしてくれたのか。今回は短かめにしてやろう。');
                    longPlay -= 0.2;
                    kemo.sprite.setRange(2/4, 1/4, 1/4, 1/4);
                    dora.sprite.setRange(1/4, 0/16, 1/4, 1/16);
                    dora.sprite.translate(0,0);
                    kemo.sprite.translate(-128,-48);
                    bar[2].sprite.translate(244, 0);
                }
                else if(r===2)
                {
                    stage = 'eatenSoft';
                    setDoraText('わざわざ起こしてくれたのか。ゆっくりめに味わってやろう。');
                    speedPlay -= 0.2;
                    kemo.sprite.setRange(2/4, 1/4, 1/4, 1/4);
                    dora.sprite.setRange(1/4, 0/16, 1/4, 1/16);
                    dora.sprite.translate(0,0);
                    kemo.sprite.translate(-128,-48);
                    bar[2].sprite.translate(244, 0);
                }
                else
                {
                    stage = 'eatenHard';
                    setDoraText('うるさいな。せっかく寝てたのに。' + colorArray[dora.colorNumber].dragonTwo + 'を食ってやる。');
                    kemo.sprite.setRange(2/4, 1/4, 1/4, 1/4);
                    dora.sprite.setRange(1/4, 0/16, 1/4, 1/16);
                    dora.sprite.translate(0,0);
                    kemo.sprite.translate(-128,-48);
                    bar[2].sprite.translate(244, 0);
                }
                leftButtonDown = false;
                
                wait = 3000;
            }
            else if(centerButtonDown)
            {
                let r = randomInt(4);
                if(r===0)
                {
                    stage = 'eatenAngry';
                    setDoraText(colorArray[dora.colorNumber].dragonOne +
                        'を無視しようとするとはいい度胸'+colorArray[dora.colorNumber].dragonDa+'な。強めに味わってやろう。');
                    strongPlay += 0.2;
                    kemo.sprite.setRange(2/4, 1/4, 1/4, 1/4);
                    dora.sprite.setRange(1/4, 0/16, 1/4, 1/16);
                    dora.sprite.translate(0,0);
                    kemo.sprite.translate(-128,-48);
                    bar[2].sprite.translate(244, 0);
                }
                else if(r===1)
                {
                    stage = 'eatenAngry';
                    setDoraText(colorArray[dora.colorNumber].dragonOne +
                        'を無視しようとするとはいい度胸'+colorArray[dora.colorNumber].dragonDa+'な。激しめに味わってやろう。');
                    speedPlay += 0.2;
                    kemo.sprite.setRange(2/4, 1/4, 1/4, 1/4);
                    dora.sprite.setRange(1/4, 0/16, 1/4, 1/16);
                    dora.sprite.translate(0,0);
                    kemo.sprite.translate(-128,-48);
                    bar[2].sprite.translate(244, 0);
                }
                else if(r===2)
                {
                    stage = 'eatenAngry';
                    setDoraText(colorArray[dora.colorNumber].dragonOne +
                        'を無視しようとするとはいい度胸'+colorArray[dora.colorNumber].dragonDa+'な。長めに味わってやろう。');
                    longPlay += 0.2;
                    kemo.sprite.setRange(2/4, 1/4, 1/4, 1/4);
                    dora.sprite.setRange(1/4, 0/16, 1/4, 1/16);
                    dora.sprite.translate(0,0);
                    kemo.sprite.translate(-128,-48);
                    bar[2].sprite.translate(244, 0);
                }
                else
                {
                    stage = 'walk';
                    setKemoText('こんなりゅう　ほっとけ。');
                }
                centerButtonDown = false;
                wait = 3000;
            }
            else if(rightButtonDown)
            {
                stage = 'kick';
                setKemoText('えい。');
                kemo.sprite.setRange(0/4, 1/4, 1/4, 1/4);
                kemo.sprite.x = 48;
                rightButtonDown = false;
                wait = 3000;
            }
            else if(wait <= 0)
            {
                let r = randomInt(4);
                if(r===0)
                {
                    stage = 'eatenSoft';
                    setDoraText('おとなしく待ってくれたのか。ゆっくりめに味わってやろう。');
                    speedPlay -= 0.2;
                    kemo.sprite.setRange(2/4, 1/4, 1/4, 1/4);
                    dora.sprite.setRange(1/4, 0/16, 1/4, 1/16);
                    dora.sprite.translate(0,0);
                    kemo.sprite.translate(-128,-48);
                    bar[2].sprite.translate(244, 0);
                    
                }
                else if(r===1)
                {
                    stage = 'eatenSoft';
                    setDoraText('おとなしく待ってくれたのか。やさしめに味わってやろう。');
                    strongPlay -= 0.2;
                    kemo.sprite.setRange(2/4, 1/4, 1/4, 1/4);
                    dora.sprite.setRange(1/4, 0/16, 1/4, 1/16);
                    dora.sprite.translate(0,0);
                    kemo.sprite.translate(-128,-48);
                    bar[2].sprite.translate(244, 0);
                    
                }
                else if(r===2)
                {
                    stage = 'eatenSoft';
                    setDoraText('おとなしく待ってくれたのか。短かめに味わってやろう。');
                    longPlay -= 0.2;
                    kemo.sprite.setRange(2/4, 1/4, 1/4, 1/4);
                    dora.sprite.setRange(1/4, 0/16, 1/4, 1/16);
                    dora.sprite.translate(0,0);
                    kemo.sprite.translate(-128,-48);
                    bar[2].sprite.translate(244, 0);
                    
                }
                else
                {
                    stage = 'eatenHard';
                    setDoraText('何もしないなら食うぞ。');
                    kemo.sprite.setRange(2/4, 1/4, 1/4, 1/4);
                    dora.sprite.setRange(1/4, 0/16, 1/4, 1/16);
                    dora.sprite.translate(0,0);
                    kemo.sprite.translate(-128,-48);
                    bar[2].sprite.translate(244, 0);
                    
                }
                wait = 3000;
            }
        }
        // 口に送られる
        else if(stage === 'sentMouth')
        {
            let z;
            if(Math.floor((wait+elapsed)/1000)>=3) z = -1;
            else if(Math.floor((wait+elapsed)/1000)>=2) z = 0;
            else if(Math.floor((wait+elapsed)/1000)>=1) z = 1;
            else z = 2;
            let a;
            if(Math.floor(wait/1000)>=3) a = -1;
            else if(Math.floor(wait/1000)>=2) a = 0;
            else if(Math.floor(wait/1000)>=1) a = 1;
            else a = 2;
            dora.sprite.setRange((1 + a)/4, 0/16, 1/4, 1/16);
            if(z!==0 && a===0)
            {
            }
            else if(z!==1 && a===1)
            {
                kemo.sprite.translate(-136, -16);
            }
            else if(z!==2 && a===2)
            {
                kemo.sprite.translate(-118, 56);
                kemo.sprite.setRange(1/4,2/4,1/4,1/4);
                kemo.sprite.scale(-32, 32);
            }
        }
        // 腹に送られる
        else if(stage === 'sentStomach')
        {
            let z;
            if(Math.floor((wait+elapsed)/1000)>=3) z = -1;
            else if(Math.floor((wait+elapsed)/1000)>=2) z = 0;
            else if(Math.floor((wait+elapsed)/1000)>=1) z = 1;
            else z = 2;
            let a;
            if(Math.floor(wait/1000)>=3) a = -1;
            else if(Math.floor(wait/1000)>=2) a = 0;
            else if(Math.floor(wait/1000)>=1) a = 1;
            else a = 2;
            dora.sprite.setRange((1 + a)/4, 2/16, 1/4, 1/16);
            if(z!==0 && a===0)
            {
                kemo.sprite.scale(-32, 32);
                kemo.sprite.setRange(2/4, 1/4, 1/4, 1/4);
                kemo.sprite.translate(-56, 60);
                sound(115, 230, 0.4);
            }
            else if(z!==1 && a===1)
            {
                kemo.sprite.translate(-64, 0);
                sound(110, 220, 0.4);
            }
            else if(z!==2 && a===2)
            {
                kemo.sprite.translate(-72, -48);
                sound(105, 210, 0.4);
            }
        }
        // 腸に送られる
        else if(stage === 'sentCrotch')
        {
            let z;
            if(Math.floor((wait+elapsed)/1000)>=3) z = -1;
            else if(Math.floor((wait+elapsed)/1000)>=2) z = 0;
            else if(Math.floor((wait+elapsed)/1000)>=1) z = 1;
            else z = 2;
            let a;
            if(Math.floor(wait/1000)>=3) a = -1;
            else if(Math.floor(wait/1000)>=2) a = 0;
            else if(Math.floor(wait/1000)>=1) a = 1;
            else a = 2;
            dora.sprite.setRange((1 + a)/4, 4/16, 1/4, 1/16);
            if(z!==0 && a===0)
            {
                kemo.sprite.scale(-32, 32);
                kemo.sprite.setRange(2/4, 1/4, 1/4, 1/4);
                kemo.sprite.translate(-80, -80);
                sound(95, 190, 0.4);
            }
            else if(z!==1 && a===1)
            {
                kemo.sprite.translate(-72, -96);
                sound(90, 180, 0.4);
            }
            else if(z!==2 && a===2)
            {
                kemo.sprite.translate(-64, -128);
                kemo.sprite.setRange(1/4,2/4,1/4,1/4);
                kemo.sprite.scale(-32, 32);
                sound(85, 170, 0.4);
            }
        }
        // 尻に送られる
        else if(stage === 'sentHip')
        {
            let z;
            if(Math.floor((wait+elapsed)/1000)>=3) z = -1;
            else if(Math.floor((wait+elapsed)/1000)>=2) z = 0;
            else if(Math.floor((wait+elapsed)/1000)>=1) z = 1;
            else z = 2;
            let a;
            if(Math.floor(wait/1000)>=3) a = -1;
            else if(Math.floor(wait/1000)>=2) a = 0;
            else if(Math.floor(wait/1000)>=1) a = 1;
            else a = 2;
            dora.sprite.setRange((1 + a)/4, 6/16, 1/4, 1/16);
            if(z!==0 && a===0)
            {
                kemo.sprite.translate(-48, -144);
                kemo.sprite.setRange(1/4,2/4,1/4,1/4);
                kemo.sprite.scale(-32, 32);
                sound(75, 150, 0.4);
            }
            else if(z!==1 && a===1)
            {
                kemo.sprite.translate(0, -150);
                sound(70, 140, 0.4);
            }
            else if(z!==2 && a===2)
            {
                kemo.sprite.translate(48, -160);
                sound(65, 130, 0.4);
            }
        }
        // 排泄される
        else if(stage === 'sentOut')
        {
            let z;
            if(Math.floor((wait+elapsed)/1000)>=3) z = -1;
            else if(Math.floor((wait+elapsed)/1000)>=2) z = 0;
            else if(Math.floor((wait+elapsed)/1000)>=1) z = 1;
            else z = 2;
            let a;
            if(Math.floor(wait/1000)>=3) a = -1;
            else if(Math.floor(wait/1000)>=2) a = 0;
            else if(Math.floor(wait/1000)>=1) a = 1;
            else a = 2;
            dora.sprite.setRange((1 + a)/4, 8/16, 1/4, 1/16);
            if(z!==0 && a===0)
            {
                kemo.sprite.translate(104, -164);
                kemo.sprite.setRange(1/4,2/4,1/4,1/4);
                kemo.sprite.scale(-32, 32);
                sound(65, 130, 0.4);
            }
            else if(z!==1 && a===1)
            {
                kemo.sprite.translate(136, -168);
                kemo.sprite.setRange(2/4,2/4,1/4,1/4);
                sound(60, 120, 0.4);
            }
            else if(z!==2 && a===2)
            {
                kemo.sprite.translate(180, -192+32);
                kemo.sprite.setRange(1/4,3/4,1/4,1/4);
                sound(55, 110, 0.4);
            }
        }
        // 疲れてる
        else if(stage === 'tired')
        {
            let a;
            a = Math.floor(wait/1000)%2;
            dora.sprite.setRange(1/4, 1/16, 1/4, 1/16);
            dora.sprite.scale(-192, 192);
            if(a===0)
            {
                kemo.sprite.translate(0, -160);
                kemo.sprite.setRange(0/4,3/4,1/4,1/4);
                kemo.sprite.scale(-32, 32);
            }
            else if(a===1)
            {
                kemo.sprite.translate(0, -160);
                kemo.sprite.setRange(1/4,3/4,1/4,1/4);
                kemo.sprite.scale(-32, 32);
            }
        }
        // 口の中
        else if(stage === 'savore0Mouth')
        {
            let z;
            if(animation%2000 < 500*strongPlay) z=0;
            else if(animation%2000 < 1000) z=1;
            else if(animation%2000 < 500*strongPlay+1000) z=2;
            else z=3;
            animation += elapsed * speedPlay;
            drink(1);
            let a;
            if(animation%2000 < 500*strongPlay) a=0;
            else if(animation%2000 < 1000) a=1;
            else if(animation%2000 < 500*strongPlay+1000) a=2;
            else a=3;
            if(savore[currentSavore].animation[z]!==0 && savore[currentSavore].animation[a]===0)
            {
                dora.sprite.setRange(0/4, 1/16, 1/4, 1/16);
                kemo.sprite.setRange(1/4, 2/4, 1/4, 1/4);
                kemo.sprite.translate(-80,99);
            }
            else if(savore[currentSavore].animation[z]!==1 && savore[currentSavore].animation[a]===1)
            {
                dora.sprite.setRange(1/4, 1/16, 1/4, 1/16);
                kemo.sprite.setRange(2/4, 2/4, 1/4, 1/4);
                kemo.sprite.translate(-80,96);
            }
            else if(savore[currentSavore].animation[z]!==2 && savore[currentSavore].animation[a]===2)
            {
                dora.sprite.setRange(2/4, 1/16, 1/4, 1/16);
                kemo.sprite.setRange(3/4, 2/4, 1/4, 1/4);
                kemo.sprite.translate(-80,93);
            }
            else if(savore[currentSavore].animation[z]!==3 && savore[currentSavore].animation[a]===3)
            {
                dora.sprite.setRange(3/4, 1/16, 1/4, 1/16);
                kemo.sprite.setRange(1/4, 2/4, 1/4, 1/4);
                kemo.sprite.translate(-77,96);
            }
            else if(savore[currentSavore].animation[z]!==4 && savore[currentSavore].animation[a]===4) 
            {
                dora.sprite.setRange(0/4, 2/16, 1/4, 1/16);
                kemo.sprite.setRange(3/4, 2/4, 1/4, 1/4);
                kemo.sprite.translate(-83,96);
            }
            if(z!==0 && a===0)      sound(120, 240, 0.3);
            else if(z!==2 && a===2) sound(120, 240, 0.3);
        }
        // 腹の中
        else if(stage === 'savore0Stomach')
        {
            let z;
            if(animation%2000 < 500*strongPlay) z=0;
            else if(animation%2000 < 1000) z=1;
            else if(animation%2000 < 500*strongPlay+1000) z=2;
            else z=3;
            drink(1.1);
            animation += elapsed * speedPlay;
            let a;
            if(animation%2000 < 500*strongPlay) a=0;
            else if(animation%2000 < 1000) a=1;
            else if(animation%2000 < 500*strongPlay+1000) a=2;
            else a=3;
            if(savore[currentSavore].animation[z]!==0 && savore[currentSavore].animation[a]===0)
            {
                dora.sprite.setRange(0/4, 3/16, 1/4, 1/16);
                kemo.sprite.setRange(3/4, 1/4, 1/4, 1/4);
                kemo.sprite.translate(-91,-80);
            }
            else if(savore[currentSavore].animation[z]!==1 && savore[currentSavore].animation[a]===1)
            {
                dora.sprite.setRange(1/4, 3/16, 1/4, 1/16);
                kemo.sprite.setRange(2/4, 1/4, 1/4, 1/4);
                kemo.sprite.translate(-88,-80);
            }
            else if(savore[currentSavore].animation[z]!==2 && savore[currentSavore].animation[a]===2)
            {
                dora.sprite.setRange(2/4, 3/16, 1/4, 1/16);
                kemo.sprite.setRange(1/4, 1/4, 1/4, 1/4);
                kemo.sprite.translate(-85,-80);
            }
            else if(savore[currentSavore].animation[z]!==3 && savore[currentSavore].animation[a]===3)
            {
                dora.sprite.setRange(3/4, 3/16, 1/4, 1/16);
                kemo.sprite.setRange(1/4, 1/4, 1/4, 1/4);
                kemo.sprite.translate(-88,-83);
            }
            else if(savore[currentSavore].animation[z]!==4 && savore[currentSavore].animation[a]===4) 
            {
                dora.sprite.setRange(0/4, 4/16, 1/4, 1/16);
                kemo.sprite.setRange(3/4, 1/4, 1/4, 1/4);
                kemo.sprite.translate(-88,-77);
            }
            if(z!==0 && a===0)      sound(100, 200, 0.3);
            else if(z!==2 && a===2) sound(100, 200, 0.3);
        }
        // 腸の中
        else if(stage === 'savore0Crotch')
        {
            let z;
            if(animation%2000 < 500*strongPlay) z=0;
            else if(animation%2000 < 1000) z=1;
            else if(animation%2000 < 500*strongPlay+1000) z=2;
            else z=3;
            drink(1.2);
            animation += elapsed * speedPlay;
            let a;
            if(animation%2000 < 500*strongPlay) a=0;
            else if(animation%2000 < 1000) a=1;
            else if(animation%2000 < 500*strongPlay+1000) a=2;
            else a=3;
            if(savore[currentSavore].animation[z]!==0 && savore[currentSavore].animation[a]===0)
            {
                dora.sprite.setRange(0/4, 5/16, 1/4, 1/16);
                kemo.sprite.setRange(3/4, 2/4, 1/4, 1/4);
                kemo.sprite.translate(-64,-147);
            }
            else if(savore[currentSavore].animation[z]!==1 && savore[currentSavore].animation[a]===1)
            {
                dora.sprite.setRange(1/4, 5/16, 1/4, 1/16);
                kemo.sprite.setRange(2/4, 2/4, 1/4, 1/4);
                kemo.sprite.translate(-64,-144);
            }
            else if(savore[currentSavore].animation[z]!==2 && savore[currentSavore].animation[a]===2)
            {
                dora.sprite.setRange(2/4, 5/16, 1/4, 1/16);
                kemo.sprite.setRange(1/4, 2/4, 1/4, 1/4);
                kemo.sprite.translate(-64,-141);
            }
            else if(savore[currentSavore].animation[z]!==3 && savore[currentSavore].animation[a]===3)
            {
                dora.sprite.setRange(3/4, 5/16, 1/4, 1/16);
                kemo.sprite.setRange(3/4, 2/4, 1/4, 1/4);
                kemo.sprite.translate(-67,-144);
            }
            else if(savore[currentSavore].animation[z]!==4 && savore[currentSavore].animation[a]===4) 
            {
                dora.sprite.setRange(0/4, 6/16, 1/4, 1/16);
                kemo.sprite.setRange(1/4, 2/4, 1/4, 1/4);
                kemo.sprite.translate(-61,-144);
            }
            if(z!==0 && a===0)      sound(80, 160, 0.3);
            else if(z!==2 && a===2) sound(80, 160, 0.3);
        }
        // 尻の中
        else if(stage === 'savore0Hip')
        {
            let z;
            if(animation%2000 < 500*strongPlay) z=0;
            else if(animation%2000 < 1000) z=1;
            else if(animation%2000 < 500*strongPlay+1000) z=2;
            else z=3;
            drink(1.3);
            animation += elapsed * speedPlay;
            let a;
            if(animation%2000 < 500*strongPlay) a=0;
            else if(animation%2000 < 1000) a=1;
            else if(animation%2000 < 500*strongPlay+1000) a=2;
            else a=3;
            if(savore[currentSavore].animation[z]!==0 && savore[currentSavore].animation[a]===0)
            {
                dora.sprite.setRange(0/4, 7/16, 1/4, 1/16);
                kemo.sprite.setRange(1/4, 2/4, 1/4, 1/4);
                kemo.sprite.translate(80,-157);
            }
            else if(savore[currentSavore].animation[z]!==1 && savore[currentSavore].animation[a]===1)
            {
                dora.sprite.setRange(1/4, 7/16, 1/4, 1/16);
                kemo.sprite.setRange(2/4, 2/4, 1/4, 1/4);
                kemo.sprite.translate(80,-160);
            }
            else if(savore[currentSavore].animation[z]!==2 && savore[currentSavore].animation[a]===2)
            {
                dora.sprite.setRange(2/4, 7/16, 1/4, 1/16);
                kemo.sprite.setRange(3/4, 2/4, 1/4, 1/4);
                kemo.sprite.translate(80,-163);
            }
            else if(savore[currentSavore].animation[z]!==3 && savore[currentSavore].animation[a]===3)
            {
                dora.sprite.setRange(3/4, 7/16, 1/4, 1/16);
                kemo.sprite.setRange(1/4, 2/4, 1/4, 1/4);
                kemo.sprite.translate(83,-160);
            }
            else if(savore[currentSavore].animation[z]!==4 && savore[currentSavore].animation[a]===4) 
            {
                dora.sprite.setRange(0/4, 8/16, 1/4, 1/16);
                kemo.sprite.setRange(3/4, 2/4, 1/4, 1/4);
                kemo.sprite.translate(77,-160);
            }
            if(z!==0 && a===0)      sound(60, 120, 0.3);
            else if(z!==2 && a===2) sound(60, 120, 0.3);
        }
        // 口の中後半
        else if(stage === 'savore1Mouth')
        {
            let z;
            if(animation%2000 < 500*strongPlay) z=0;
            else if(animation%2000 < 1000) z=1;
            else if(animation%2000 < 500*strongPlay+1000) z=2;
            else z=3;
            drink(2.0);
            animation += elapsed * speedPlay * 2;
            let a;
            if(animation%2000 < 500*strongPlay) a=0;
            else if(animation%2000 < 1000) a=1;
            else if(animation%2000 < 500*strongPlay+1000) a=2;
            else a=3;
            if(savore[currentSavore].animation[z]!==0 && savore[currentSavore].animation[a]===0)
            {
                dora.sprite.setRange(0/4, 1/16, 1/4, 1/16);
                kemo.sprite.setRange(1/4, 2/4, 1/4, 1/4);
                kemo.sprite.translate(-80,99);
            }
            else if(savore[currentSavore].animation[z]!==1 && savore[currentSavore].animation[a]===1)
            {
                dora.sprite.setRange(1/4, 1/16, 1/4, 1/16);
                kemo.sprite.setRange(2/4, 2/4, 1/4, 1/4);
                kemo.sprite.translate(-80,96);
            }
            else if(savore[currentSavore].animation[z]!==2 && savore[currentSavore].animation[a]===2)
            {
                dora.sprite.setRange(2/4, 1/16, 1/4, 1/16);
                kemo.sprite.setRange(3/4, 2/4, 1/4, 1/4);
                kemo.sprite.translate(-80,93);
            }
            else if(savore[currentSavore].animation[z]!==3 && savore[currentSavore].animation[a]===3)
            {
                dora.sprite.setRange(3/4, 1/16, 1/4, 1/16);
                kemo.sprite.setRange(1/4, 2/4, 1/4, 1/4);
                kemo.sprite.translate(-77,96);
            }
            else if(savore[currentSavore].animation[z]!==4 && savore[currentSavore].animation[a]===4) 
            {
                dora.sprite.setRange(0/4, 2/16, 1/4, 1/16);
                kemo.sprite.setRange(3/4, 2/4, 1/4, 1/4);
                kemo.sprite.translate(-83,96);
            }
            if(z!==0 && a===0)      sound(120, 240, 0.3);
            else if(z!==2 && a===2) sound(120, 240, 0.3);
        }
        // 腹の中後半
        else if(stage === 'savore1Stomach')
        {
            let z;
            if(animation%2000 < 500*strongPlay) z=0;
            else if(animation%2000 < 1000) z=1;
            else if(animation%2000 < 500*strongPlay+1000) z=2;
            else z=3;
            drink(2.2);
            animation += elapsed * speedPlay * 2;
            let a;
            if(animation%2000 < 500*strongPlay) a=0;
            else if(animation%2000 < 1000) a=1;
            else if(animation%2000 < 500*strongPlay+1000) a=2;
            else a=3;
            if(savore[currentSavore].animation[z]!==0 && savore[currentSavore].animation[a]===0)
            {
                dora.sprite.setRange(0/4, 3/16, 1/4, 1/16);
                kemo.sprite.setRange(3/4, 1/4, 1/4, 1/4);
                kemo.sprite.translate(-91,-80);
            }
            else if(savore[currentSavore].animation[z]!==1 && savore[currentSavore].animation[a]===1)
            {
                dora.sprite.setRange(1/4, 3/16, 1/4, 1/16);
                kemo.sprite.setRange(2/4, 1/4, 1/4, 1/4);
                kemo.sprite.translate(-88,-80);
            }
            else if(savore[currentSavore].animation[z]!==2 && savore[currentSavore].animation[a]===2)
            {
                dora.sprite.setRange(2/4, 3/16, 1/4, 1/16);
                kemo.sprite.setRange(1/4, 1/4, 1/4, 1/4);
                kemo.sprite.translate(-85,-80);
            }
            else if(savore[currentSavore].animation[z]!==3 && savore[currentSavore].animation[a]===3)
            {
                dora.sprite.setRange(3/4, 3/16, 1/4, 1/16);
                kemo.sprite.setRange(1/4, 1/4, 1/4, 1/4);
                kemo.sprite.translate(-88,-83);
            }
            else if(savore[currentSavore].animation[z]!==4 && savore[currentSavore].animation[a]===4) 
            {
                dora.sprite.setRange(0/4, 4/16, 1/4, 1/16);
                kemo.sprite.setRange(3/4, 1/4, 1/4, 1/4);
                kemo.sprite.translate(-88,-77);
            }
            if(z!==0 && a===0)      sound(100, 200, 0.3);
            else if(z!==2 && a===2) sound(100, 200, 0.3);
        }
        // 腸の中後半
        else if(stage === 'savore1Crotch')
        {
            let z;
            if(animation%2000 < 500*strongPlay) z=0;
            else if(animation%2000 < 1000) z=1;
            else if(animation%2000 < 500*strongPlay+1000) z=2;
            else z=3;
            drink(2.4);
            animation += elapsed * speedPlay * 2;
            let a;
            if(animation%2000 < 500*strongPlay) a=0;
            else if(animation%2000 < 1000) a=1;
            else if(animation%2000 < 500*strongPlay+1000) a=2;
            else a=3;
            if(savore[currentSavore].animation[z]!==0 && savore[currentSavore].animation[a]===0)
            {
                dora.sprite.setRange(0/4, 5/16, 1/4, 1/16);
                kemo.sprite.setRange(3/4, 2/4, 1/4, 1/4);
                kemo.sprite.translate(-64,-147);
            }
            else if(savore[currentSavore].animation[z]!==1 && savore[currentSavore].animation[a]===1)
            {
                dora.sprite.setRange(1/4, 5/16, 1/4, 1/16);
                kemo.sprite.setRange(2/4, 2/4, 1/4, 1/4);
                kemo.sprite.translate(-64,-144);
            }
            else if(savore[currentSavore].animation[z]!==2 && savore[currentSavore].animation[a]===2)
            {
                dora.sprite.setRange(2/4, 5/16, 1/4, 1/16);
                kemo.sprite.setRange(1/4, 2/4, 1/4, 1/4);
                kemo.sprite.translate(-64,-141);
            }
            else if(savore[currentSavore].animation[z]!==3 && savore[currentSavore].animation[a]===3)
            {
                dora.sprite.setRange(3/4, 5/16, 1/4, 1/16);
                kemo.sprite.setRange(3/4, 2/4, 1/4, 1/4);
                kemo.sprite.translate(-67,-144);
            }
            else if(savore[currentSavore].animation[z]!==4 && savore[currentSavore].animation[a]===4) 
            {
                dora.sprite.setRange(0/4, 6/16, 1/4, 1/16);
                kemo.sprite.setRange(1/4, 2/4, 1/4, 1/4);
                kemo.sprite.translate(-61,-144);
            }
            if(z!==0 && a===0)      sound(80, 160, 0.3);
            else if(z!==2 && a===2) sound(80, 160, 0.3);
        }
        // 尻の中後半
        else if(stage === 'savore1Hip')
        {
            let z;
            if(animation%2000 < 500*strongPlay) z=0;
            else if(animation%2000 < 1000) z=1;
            else if(animation%2000 < 500*strongPlay+1000) z=2;
            else z=3;
            drink(2.6);
            animation += elapsed * speedPlay * 2;
            let a;
            if(animation%2000 < 500*strongPlay) a=0;
            else if(animation%2000 < 1000) a=1;
            else if(animation%2000 < 500*strongPlay+1000) a=2;
            else a=3;
            if(savore[currentSavore].animation[z]!==0 && savore[currentSavore].animation[a]===0)
            {
                dora.sprite.setRange(0/4, 7/16, 1/4, 1/16);
                kemo.sprite.setRange(1/4, 2/4, 1/4, 1/4);
                kemo.sprite.translate(80,-157);
            }
            else if(savore[currentSavore].animation[z]!==1 && savore[currentSavore].animation[a]===1)
            {
                dora.sprite.setRange(1/4, 7/16, 1/4, 1/16);
                kemo.sprite.setRange(2/4, 2/4, 1/4, 1/4);
                kemo.sprite.translate(80,-160);
            }
            else if(savore[currentSavore].animation[z]!==2 && savore[currentSavore].animation[a]===2)
            {
                dora.sprite.setRange(2/4, 7/16, 1/4, 1/16);
                kemo.sprite.setRange(3/4, 2/4, 1/4, 1/4);
                kemo.sprite.translate(80,-163);
            }
            else if(savore[currentSavore].animation[z]!==3 && savore[currentSavore].animation[a]===3)
            {
                dora.sprite.setRange(3/4, 7/16, 1/4, 1/16);
                kemo.sprite.setRange(1/4, 2/4, 1/4, 1/4);
                kemo.sprite.translate(83,-160);
            }
            else if(savore[currentSavore].animation[z]!==4 && savore[currentSavore].animation[a]===4) 
            {
                dora.sprite.setRange(0/4, 8/16, 1/4, 1/16);
                kemo.sprite.setRange(3/4, 2/4, 1/4, 1/4);
                kemo.sprite.translate(77,-160);
            }
            if(z!==0 && a===0)      sound(60, 120, 0.3);
            else if(z!==2 && a===2) sound(60, 120, 0.3);
        }

        if(
            stage === 'savore0Mouth' ||
            stage === 'savore0Stomach' ||
            stage === 'savore0Crotch' ||
            stage === 'savore0Hip' ||
            stage === 'savore1Mouth' ||
            stage === 'savore1Stomach' ||
            stage === 'savore1Crotch' ||
            stage === 'savore1Hip'
        )
        {
            if(tankCc + damCc <= 0 && !gameOver)
            {
                strongPlay = 1.4;
                speedPlay = 0.5;
                wait = 60000;
                gameOver = true;
                let r = randomInt(8);
                if(r === 0) setDoraText('ぐへへ、もう蜜が出ないな。でも、実はまだたっぷり出るはずだ。');
                if(r === 1) setDoraText('ぐへへ、もう蜜が出ないか。でも、まだ満足できん。無理にでもたくさん出せ。');
                if(r === 2) setDoraText('ぐへへ、もう蜜を出しきってしまったな。だが、まだまだ無理にでもたくさん出してもらう。');
                if(r === 3) setDoraText('ぐへへ、もう蜜が無いな。だが、満足できないから、無理にでもたっぷり出してもらうぞ。');
                if(r === 4) setDoraText('ぐへへ、もう蜜を漏らしきったな。でも、最後にたっぷり味わわせてもらうぞ。');
                if(r === 5) setDoraText('ぐへへ、もう蜜が出なくなったな。だが最後は、最高の気持ちよさを味わってもらうぞ。');
                if(r === 6) setDoraText('ぐへへ、もう蜜を出し尽くしたな。だが最後は、最高の気持ちよさを味わうがいい。');
                if(r === 7) setDoraText('ぐへへ、もう蜜を出せないな。だが、次は最高の気持ちよさを味わわせてやる。');

                bar[0].sprite.setRange(1/16, 2/4, 1/16, 1/4);
                bar[2].sprite.setRange(1/16, 2/4, 1/16, 1/4);

                bar[0].sprite.y = Math.round(-192 + 0) / 2;
                bar[0].sprite.scale(4, Math.round(0) / 2);
                bar[2].sprite.y = Math.round(-192 + 0) / 2;
                bar[2].sprite.scale(4, Math.round(0) / 2);
                milkingStage = 1;
            }
            if(gameOver && wait < 50000 && milkingStage === 1)
            {
                speedPlay = 1;
                milkingStage = 2;
                let r = randomInt(4);
                if(r === 0) setKemoText('ひいい、それだけは　やめて、');
                if(r === 1) setKemoText('だめ、それは、だめええ、');
                if(r === 2) setKemoText('おねがい、それはやめて、');
                if(r === 3) setKemoText('だめえ、それだけは　だめえ、');
                bar[0].sprite.y = Math.round(-192 + 128) / 2;
                bar[0].sprite.scale(4, Math.round(128) / 2);
                bar[2].sprite.y = Math.round(-192 + 0) / 2;
                bar[2].sprite.scale(4, Math.round(0) / 2);
            }
            if(gameOver && wait < 40000 && milkingStage === 2)
            {
                speedPlay = 1.5;
                milkingStage = 3;
                let r = randomInt(4);
                if(r === 0) setDoraText('いくぞ。たっぷり出せよ。');
                if(r === 1) setDoraText('最高だぞ、思い切り出せよ。');
                if(r === 2) setDoraText('最高に気持ちいから、覚悟しろよ。');
                if(r === 3) setDoraText('最高に気持ちいから、頑張れよ。');
            }
            if(gameOver && wait < 30000 && milkingStage === 3)
            {
                speedPlay = 2;
                milkingStage = 4;
                let r = randomInt(4);
                if(r === 0) setKemoText('いやああ！だええ！もうとえてええ！');
                if(r === 1) setKemoText('やえて！やえてえ！いやあああ！');
                if(r === 2) setKemoText('とえて！うごかさないれえ！もうだえええ！');
                if(r === 3) setKemoText('うごかさないで！もう　うごかさないでえ！');
            }
            if(gameOver && wait < 20000 && milkingStage === 4)
            {
                speedPlay = 3;
                milkingStage = 5;
                let r = randomInt(4);
                if(r === 0) setDoraText('さあ、美味しいのを期待してるぞ。出してしまえ。');
                if(r === 1) setDoraText('気持ちいだろ。さあ、我慢せず出せ。');
                if(r === 2) setDoraText('いいぞ。あと一息だ。もう出してしまえ。');
                if(r === 3) setDoraText('いいぞ。さあ、もう我慢せず出せ。');
            }
            if(gameOver && wait < 10000 && milkingStage === 5)
            {
                speedPlay = 1;
                milkingStage = 1;
                strongPlay = 1.6;
                milkingStage = 6;
                let r = randomInt(8);
                if(r === 0) setKemoText('いっ！！！');
                if(r === 1) setKemoText('ひっ！！！');
                if(r === 2) setKemoText('くっ！！！');
                if(r === 3) setKemoText('あっ！！！');
                if(r === 4) setKemoText('んあっ！！！');
                if(r === 5) setKemoText('くあっ！！！');
                if(r === 6) setKemoText('ひあっ！！！');
                if(r === 7) setKemoText('いあっ！！！');
            }
            if(gameOver && wait < 1000 && milkingStage === 6)
            {
                milkingStage = 7;
                speedPlay = 0;
            }

            if(wait < 10000 && milkingStage === 6)
            {
                bar[0].sprite.y = Math.round(-192 + 96) / 2;
                bar[0].sprite.scale(4, Math.round(96) / 2);
                bar[2].sprite.y = Math.round(-192 + 32) / 2;
                bar[2].sprite.scale(4, Math.round(32) / 2);
            }
            if(wait < 9000 && milkingStage === 6)
            {
                bar[0].sprite.y = Math.round(-192 + 64) / 2;
                bar[0].sprite.scale(4, Math.round(64) / 2);
                bar[2].sprite.y = Math.round(-192 + 64) / 2;
                bar[2].sprite.scale(4, Math.round(64) / 2);
            }
            if(wait < 8000 && milkingStage === 6)
            {
                bar[0].sprite.y = Math.round(-192 + 48) / 2;
                bar[0].sprite.scale(4, Math.round(48) / 2);
                bar[2].sprite.y = Math.round(-192 + 80) / 2;
                bar[2].sprite.scale(4, Math.round(80) / 2);
            }
            if(wait < 7000 && milkingStage === 6)
            {
                bar[0].sprite.y = Math.round(-192 + 32) / 2;
                bar[0].sprite.scale(4, Math.round(32) / 2);
                bar[2].sprite.y = Math.round(-192 + 96) / 2;
                bar[2].sprite.scale(4, Math.round(96) / 2);
            }
            if(wait < 6000 && milkingStage === 6)
            {
                bar[0].sprite.y = Math.round(-192 + 16) / 2;
                bar[0].sprite.scale(4, Math.round(16) / 2);
                bar[2].sprite.y = Math.round(-192 + 112) / 2;
                bar[2].sprite.scale(4, Math.round(112) / 2);
            }
            if(wait < 5000 && milkingStage === 6)
            {
                bar[0].sprite.y = Math.round(-192 + 0) / 2;
                bar[0].sprite.scale(4, Math.round(0) / 2);
                bar[2].sprite.y = Math.round(-192 + 128) / 2;
                bar[2].sprite.scale(4, Math.round(128) / 2);
            }
        }

        // 次のステージへ
        if(wait <= 0)
        {
            if(stage === 'title') stage = 'start';
            else if(stage === 'start') stage = 'walk';
            else if(stage === 'findJuice') stage = 'selectJuice';
            else if(stage === 'findTheDragon') stage = 'selectEatenOrKickOrIgnore';
            else if(stage === 'eatenSoft') stage = 'dontEat';
            else if(stage === 'eatenHard') stage = 'dontEat';
            else if(stage === 'eatenAngry') stage = 'apologize';
            else if(stage === 'kick') stage = 'kickedAngry';
            else if(stage === 'kickedAngry') stage = 'apologize';
            else if(stage === 'apologize') stage = 'sentMouth';
            //else if(stage === 'eatLovingly') stage = 'sentMouth';
            else if(stage === 'dontEat') stage = 'sentMouth';

            else if(stage === 'sentMouth') stage = 'cryMouth';
            else if(stage === 'cryMouth') stage = 'talkMouth';
            else if(stage === 'talkMouth') stage = 'answerMouth';
            else if(stage === 'answerMouth') stage = 'savore0Mouth';
            //else if(stage === 'selectMouth') stage = 'savore0Mouth';

            else if((!dragonKeep || !gameOver) && stage === 'savore0Mouth')    stage = 'savore1Mouth';
            else if((!dragonKeep || !gameOver) && stage === 'savore1Mouth')    stage = 'finishMouth';
            else if((!dragonKeep || !gameOver) && stage === 'savore0Stomach')  stage = 'savore1Stomach';
            else if((!dragonKeep || !gameOver) && stage === 'savore1Stomach')  stage = 'finishStomach';
            else if((!dragonKeep || !gameOver) && stage === 'savore0Crotch')   stage = 'savore1Crotch';
            else if((!dragonKeep || !gameOver) && stage === 'savore1Crotch')   stage = 'finishCrotch';
            else if((!dragonKeep || !gameOver) && stage === 'savore0Hip')      stage = 'savore1Hip';
            else if((!dragonKeep || !gameOver) && stage === 'savore1Hip')      stage = 'finishHip';

            else if(dragonKeep && gameOver && stage === 'savore0Mouth') stage = 'keep';
            else if(dragonKeep && gameOver && stage === 'savore1Mouth') stage = 'keep';
            else if(dragonKeep && gameOver && stage === 'savore0Stomach') stage = 'keep';
            else if(dragonKeep && gameOver && stage === 'savore1Stomach') stage = 'keep';
            else if(dragonKeep && gameOver && stage === 'savore0Crotch') stage = 'keep';
            else if(dragonKeep && gameOver && stage === 'savore1Crotch') stage = 'keep';
            else if(dragonKeep && gameOver && stage === 'savore0Hip') stage = 'keep';
            else if(dragonKeep && gameOver && stage === 'savore1Hip') stage = 'keep';

            else if(stage === 'keep')
            {
                let r = randomInt(6);
                if(r===0)
                setDoraText(
                    '気持ちよかった'+colorArray[dora.colorNumber].dragonDa+'ろ、'+kemo.rorishota+'よ。' +
                    colorArray[dora.colorNumber].dragonTwo +
                    'はしばらくそこにいろ。水分は与えてやるから。'
                );
                else if(r===1)
                    setDoraText(
                        '気持ちよかった'+colorArray[dora.colorNumber].dragonDa+
                        'ろ、'+kemo.rorishota+'よ。' +
                        colorArray[dora.colorNumber].dragonTwo +
                        'はしばらくそこに閉じ込めてやる。');
                else if(r===2)
                    setDoraText('残念'+colorArray[dora.colorNumber].dragonDa+'ったな、美味しい美味しい' +
                        kemo.rorishota + 'よ。水分は与えてやるから、しばらくそこにいろ。');
                else if(r===3)
                    setDoraText('残念'+colorArray[dora.colorNumber].dragonDa+'ったな、美味しい美味しい' + kemo.rorishota + 'よ。しばらくそこに閉じ込めてやる。');
                else if(r===4)
                    setDoraText('よかったぞ、美味しい美味しい' + kemo.rorishota + 'よ。しばらくそこに閉じ込めてやる。');
                else if(r===5)
                    setDoraText('よかったぞ、美味しい美味しい' + kemo.rorishota + 'よ。水分は与えてやるから、しばらくそこにいろ。');
                else if(r===6)
                    setDoraText('気持ちよくて'+kemo.rorishota+'の蜜を出しきったようだな。しばらくそこにいろ、水分を与えてやるから。');
                else if(r===7)
                    setDoraText('気持ちよくて'+kemo.rorishota+'の蜜を出しきったようだな。しばらくそこに閉じめてやる。');
                wait = 6000;
                stage = 'dry';
            }


            else if(stage === 'sentStomach') stage = 'cryStomach';
            else if(stage === 'cryStomach') stage = 'talkStomach';
            else if(stage === 'talkStomach') stage = 'answerStomach';
            else if(stage === 'answerStomach') stage = 'savore0Stomach';
            //else if(stage === 'selectStomach') stage = 'savore0Stomach';

            else if(stage === 'sentCrotch') stage = 'cryCrotch';
            else if(stage === 'cryCrotch') stage = 'talkCrotch';
            else if(stage === 'talkCrotch') stage = 'answerCrotch';
            else if(stage === 'answerCrotch') stage = 'savore0Crotch';
            //else if(stage === 'selectCrotch') stage = 'savore0Crotch';

            else if(stage === 'sentHip') stage = 'cryHip';
            else if(stage === 'cryHip') stage = 'talkHip';
            else if(stage === 'talkHip') stage = 'answerHip';
            else if(stage === 'answerHip') stage = 'savore0Hip';
            //else if(stage === 'selectHip') stage = 'savore0Hip';
            
            else if(stage === 'finishMouth')   stage = 'complaintMouth';
            else if(stage === 'finishStomach') stage = 'complaintStomach';
            else if(stage === 'finishCrotch')  stage = 'complaintCrotch';
            else if(stage === 'finishHip')     stage = 'complaintHip';
            
            else if(stage === 'complaintMouth') stage = 'sentStomach';
            else if(stage === 'complaintStomach') stage = 'sentCrotch';
            else if(stage === 'complaintCrotch') stage = 'sentHip';
            else if(stage === 'complaintHip') stage = 'sentOut';


            else if(stage === 'dry'){
                stage = 'result';
                let r = randomInt(4);
                if(r === 0) setKemoText(dragonNumber + 'たいめのドラゴンさんのなかで、ひからびちゃった。さいこうに　きもちよかった…。');
                if(r === 1) setKemoText(dragonNumber + 'たいめのドラゴンさんに、しぼりつくされちゃった。さいこうに　きもちよかった…。');
                if(r === 2) setKemoText(dragonNumber + 'たいめのドラゴンさんのなかで、すいつくされちゃった。さいこうに　きもちよかった…。');
                if(r === 3) setKemoText(dragonNumber + 'たいめのドラゴンさんに、あじわいつくされちゃった。さいこうに　きもちよかった…。');
                dragonNumber = 1;
                wait = 6000;
            }
            
            else if(stage === 'sentOut') stage = 'tired';
            else if(stage === 'tired')
            {
                if(tankCc + damCc > 0)
                {
                    stage = 'walk';
                    setKemoText(ccCry[15 - Math.floor(Math.max(Math.min((tankCc+damCc) / 192, 1), 0) * 15)]);
                }
                else
                {
                    stage = 'dry';
                    let r = randomInt(4);
                    if(r === 0) setDoraText('ごちそうさま、美味しくてかわいい' + kemo.rorishota + 'よ。');
                    if(r === 1) setDoraText('ごちそうさま、美味しくてかわいい' + kemo.rorishota + 'よ。');
                    if(r === 2) setDoraText('次はもっと体をうるおして来い。また食ってやる。');
                    if(r === 3) setDoraText('気持ちよかったな。干からびた姿もかわいいぞ。');
                    wait = 6000;
                }
            }
            else if(stage === 'result')
            {
                stage = 'title';
            }
        }
        // 待ち中
        else
        {
            draw();

            previousTimeStamp = timeStamp;
            requestAnimationFrame(animate);
            return;
        }
    }

    // タイトル
    if(stage === 'title')
    {
        damCc = 0;
        tankCc = 80;
        animationTimeStamp = timeStamp;
        longPlay = 1.0;
        speedPlay = 1.0;
        strongPlay = 1.0;
    
        dragonCc = 0;
        dragonTotalCc = 0;

        feel = 1;

        leak = 0.01;
        dragonNumber = 1;
    
        question = -1;
        savoreArray = [0,1,2];
        currentSavore = 0;
        wantToLeak = randomInt(2);
        
        animation = -100;
    
        whiteDragonNumber = 5 + randomInt(5);

        nextDistance = 512;
        nextRight = true;
        wait = 3000;
        gameOver = false;
        dragonKeep = randomInt(2);

        flushColor = false;

        milkingStage = 0;
        drink(0);

        kemo.sprite.setRange(0/4,0/4,1/4,1/4);
        dora.sprite.setRange(0/4,0/16,1/4,1/16);
        kemo.sprite.scale(32,32);
        dora.sprite.scale(192,192);
        kemo.sprite.translate(0,-192+32);
        dora.sprite.translate(512,0);

        kemo.colorNumber = randomInt(6);
        dora.colorNumber = randomInt(6);

        kemo.sprite.setColor(
            colorArray[kemo.colorNumber].middle,
            colorArray[kemo.colorNumber].light,
            colorArray[kemo.colorNumber].dark,
        );
        bar[0].sprite.setColor(
            colorArray[kemo.colorNumber].middle,
            colorArray[kemo.colorNumber].light,
            colorArray[kemo.colorNumber].dark,
        );
        bar[1].sprite.setColor(
            colorArray[kemo.colorNumber].middle,
            colorArray[kemo.colorNumber].light,
            colorArray[kemo.colorNumber].dark,
        );

        bar[0].sprite.setRange(1/16, 2/4, 1/16, 1/4);

        dora.sprite.setColor(
            colorArray[dora.colorNumber].middle,
            colorArray[dora.colorNumber].light,
            colorArray[dora.colorNumber].dark,
        );
        bar[2].sprite.setColor(
            colorArray[kemo.colorNumber].middle,
            colorArray[kemo.colorNumber].light,
            colorArray[kemo.colorNumber].dark,
        );

        setKemoText('Kuwareta 1.1.A へようこそ。');
        nextObject = 'dragon';
        dora.sprite.x = Math.floor(nextDistance + 128);
    }
    // タイトル
    else if(stage === 'rorishota')
    {
        setKemoText('ええと　わたしは…');
        wait = 3000;
    }
    // ロリショタ
    else if(stage === 'start')
    {
        setButton('ケモロリだよ','ケモロリショタ','ケモショタだよ');
        wait = 1280000;
    }
    // 歩き中
    else if(stage === 'walk')
    {
        nextDistance -= elapsed / 8;

        kemo.sprite.setRange((1+Math.floor(animationElapsed/128%3))/4, 0/4, 1/4, 1/4)
        kemo.sprite.scale(32, 32);

        if(nextDistance > 0 || nextDistance <= 0 && !nextRight)
        {
            if(nextObject === 'juice')
            {
                for(let i = 0; i<3; i++)
                {
                    if(juice[i].sprite.x !== -512)juice[i].sprite.x = nextDistance + 32*(i+1);
                }
            }
            if(nextObject === 'dragon')
            {
                dora.sprite.x = Math.floor(nextDistance + 128);
            }
        }
        if(nextDistance <= 0 && nextRight)
        {
            nextRight = false;
            nextDistance = 0;
            if(nextObject === 'juice')
            {
                stage = 'findJuice';
                setKemoText('ジュースだ。どれにしよう。');
                kemo.sprite.setRange(0/4, 0/4, 1/4, 1/4)
                wait = 3000;
            }
            if(nextObject === 'dragon')
            {
                strongPlay = 1.0;
                speedPlay = 1.0;
                longPlay = 1.0;
                stage = 'findTheDragon';
                if(dora.colorNumber === 6)
                {
                    setKemoText(colorArray[dora.colorNumber].kemoColorName+'のドラゴンさんだ…。ちょっとこわい…。');
                    wantToLeak = true;
                }
                else if(dora.colorNumber === 7)
                {
                    setKemoText(colorArray[dora.colorNumber].kemoColorName+'のドラゴンさんだ！');
                    wantToLeak = false;
                }
                else
                    setKemoText(colorArray[dora.colorNumber].kemoColorName+'のドラゴンさんだ。どうしよう。');
                kemo.sprite.setRange(0/4, 0/4, 1/4, 1/4)
                wait = 3000;
            }
        }
        if(nextDistance <= -640)
        {
            nextDistance = 320;
            let r = randomInt(3);
            feel = Math.max(feel * (3+r) / (4+r), 1);
            flushColor = false;
            nextRight = true;
            let d;
            d = (nextObject === 'juice');
            if(d)
            {
                nextObject = 'dragon';
                wantToLeak = randomInt(2);
                dora.sprite.setRange(0/4,0/16,1/4,1/16);
                dora.sprite.x = Math.floor(nextDistance + 128);
                if(dragonNumber % 10 === whiteDragonNumber - 1)
                    dora.colorNumber = 6;
                else if(dragonNumber % 10 === whiteDragonNumber)
                    dora.colorNumber = 7;
                else
                    dora.colorNumber = randomInt(6);
                dragonNumber++;
                dora.sprite.setColor(
                    colorArray[dora.colorNumber].middle,
                    colorArray[dora.colorNumber].light,
                    colorArray[dora.colorNumber].dark,
                );
                dora.sprite.scale(192,192);
                dragonTotalCc = 0;
                bar[2].sprite.scale(4,0);
            }
            else
            {
                nextObject = 'juice';
                
                if(randomInt(16))
                    juiceArray = randomArray(6, 3);
                else
                    juiceArray = randomArray(8, 3);
                for(let i = 0; i<3; i++)
                {
                    juice[i].sprite.x = nextDistance + 32*(i+1);
                    juice[i].colorNumber = juiceArray[i];
                    juice[i].sprite.setColor(
                        colorArray[juice[i].colorNumber].middle,
                        colorArray[juice[i].colorNumber].light,
                        colorArray[juice[i].colorNumber].dark,
                    );
                }
            }
        }
    }
    // ジュースを選ぶ
    else if(stage === 'selectJuice')
    {
        setButton(
            colorArray[juiceArray[0]].kemoColorName,
            colorArray[juiceArray[1]].kemoColorName,
            colorArray[juiceArray[2]].kemoColorName,
            colorArray[juiceArray[0]].name,
            colorArray[juiceArray[1]].name,
            colorArray[juiceArray[2]].name,
        );
        wait = 9000;
    }
    // ドラゴンをどうするか
    else if(stage === 'selectEatenOrKickOrIgnore')
    {
        setButton(
            'おこす',
            'ほっとく',
            'けとばす',
        );
        wait = 9000;
    }
    // 蹴って怒られた
    else if(stage === 'kickedAngry')
    {
        let r = randomInt(4);
        if(r===0)
        {
            setDoraText('今、けったな。罰としてかなり強めに味わってやる。');
            strongPlay += 0.6;
            kemo.sprite.setRange(2/4, 1/4, 1/4, 1/4);
            dora.sprite.setRange(1/4, 0/16, 1/4, 1/16);
            dora.sprite.translate(0,0);
            kemo.sprite.translate(-128,-48);
            bar[2].sprite.translate(244, 0);
            
        }
        if(r===1)
        {
            setDoraText('今、けったな。罰としてかなり激しめに味わってやる。');
            speedPlay += 0.6;
            kemo.sprite.setRange(2/4, 1/4, 1/4, 1/4);
            dora.sprite.setRange(1/4, 0/16, 1/4, 1/16);
            dora.sprite.translate(0,0);
            kemo.sprite.translate(-128,-48);
            bar[2].sprite.translate(244, 0);
        }
        if(r===2)
        {
            setDoraText('今、けったな。罰としてかなり長めに味わってやる。');
            longPlay += 0.6;
            kemo.sprite.setRange(2/4, 1/4, 1/4, 1/4);
            dora.sprite.setRange(1/4, 0/16, 1/4, 1/16);
            dora.sprite.translate(0,0);
            kemo.sprite.translate(-128,-48);
            bar[2].sprite.translate(244, 0);
        }
        if(r===3)
        {
            setDoraText('けるような悪い子には念入りなお仕置きが必要'+colorArray[dora.colorNumber].dragonDa+'。始めるぞ。');
            longPlay += 0.2;
            speedPlay += 0.2;
            strongPlay += 0.2;
            kemo.sprite.setRange(2/4, 1/4, 1/4, 1/4);
            dora.sprite.setRange(1/4, 0/16, 1/4, 1/16);
            dora.sprite.translate(0,0);
            kemo.sprite.translate(-128,-48);
            bar[2].sprite.translate(244, 0);
        }
        wait = 3000;
    }
    // ごめんなさい
    else if(stage === 'apologize')
    {
        let r = randomInt(2);
        if(r===0)
            setKemoText('ごめんなさい！');
        else if(r===1)
            setKemoText('ゆるして！');
        dora.sprite.setRange(1/4, 0/16, 1/4, 1/16);
        wait = 3000;
    }
    // 食べないで
    else if(stage === 'dontEat')
    {
        let r = randomInt(4);
        if(r===0)
            setKemoText('いやああ、たべないで…。');
        else if(r===1)
            setKemoText('やだあ、たべるの…。');
        else if(r===2)
            setKemoText('だめえ、たべちゃいや…。');
        else if(r===3)
            setKemoText('おいしく　たべてね…。');
        dora.sprite.setRange(1/4, 0/16, 1/4, 1/16);
        wait = 3000;
    }
    // 口へ送る
    else if(stage === 'sentMouth')
    {
        if(!gameOver)
        {
            let r = randomInt(8);
            if(r===0)
                setDoraText('いただきます。');
            else if(r===1)
                setDoraText('ではいただくぞ。');
            else if(r===2)
                setDoraText('せいぜいがんばれよ。では食うぞ。');
            else if(r===3)
                setDoraText('まずは口の中で遊んでやる。');
            else if(r===4 && wantToLeak)
                setDoraText('たくさん'+kemo.rorishota+'の蜜を出せよ。期待してるぞ。');
            else if(r===4 && !wantToLeak)
                setDoraText('蜜があまり出すぎないように、くれぐれも我慢しろよ。');
            else if(r===5 && wantToLeak)
                setDoraText('たっぷり'+kemo.rorishota+'の蜜を出せよ。味わい尽くしてやる。');
            else if(r===5 && !wantToLeak)
                setDoraText('蜜をあまり出しすぎないよう、くれぐれも我慢しろよ。');
            else if(r===6 && wantToLeak)
                setDoraText(kemo.rorishota+'の蜜をたくさん出せよ。では食うぞ。');
            else if(r===6 && !wantToLeak)
                setDoraText('蜜が出すぎないように我慢しろよ。ではいただくぞ。');
            else if(r===7 && wantToLeak)
                setDoraText('甘い甘い'+kemo.rorishota+'の蜜を出せよ。全部味わってやる。');
            else if(r===7 && !wantToLeak)
                setDoraText('気持ちいだろうが、蜜を出しすぎないように耐えろよ。');
            currentSavore = randomInt(8);
        }
        wait = 3000;
    }
    // 腹へ送る
    else if(stage === 'sentStomach')
    {
        if(!gameOver)
        {
            let r = randomInt(4);
            if(r===0)
                setDoraText('呑んでやる。');
            else if(r===1)
                setDoraText('ごくり。');
            else if(r===2)
                setDoraText('呑み込むぞ。');
            else if(r===3)
                setDoraText('今度は腹の中で遊んでやる。');
            currentSavore = randomInt(8);
        }
        wait = 3000;
    }
    // 腸へ送る
    else if(stage === 'sentCrotch')
    {
        if(!gameOver)
        {
            let r = randomInt(4);
            if(r===0)
                setDoraText('股ぐらへ送ってやる。');
            else if(r===1)
                setDoraText('今度は股ぐらで遊んでやる。');
            else if(r===2)
                setDoraText('股ぐらへ落ちろ。');
            else if(r===3)
                setDoraText('きついのはこれから'+colorArray[dora.colorNumber].dragonDa+'ぞ。');
            currentSavore = randomInt(8);
        }
        wait = 3000;
    }
    // 尻へ送る
    else if(stage === 'sentHip')
    {
        if(!gameOver)
        {
            let r = randomInt(4);
            if(r===0)
                setDoraText('尻へ送ってやる。');
            else if(r===1)
                setDoraText('最後は尻で遊んでやる。');
            else if(r===2)
                setDoraText('尻に入れてやる。');
            else if(r===3)
                setDoraText('最後は一番きついから覚悟しろ。');
            currentSavore = randomInt(8);
        }
        wait = 3000;
    }
    // 排泄する
    else if(stage === 'sentOut')
    {
        if(!gameOver)
        {
            let r = randomInt(4);
            if(r===0)
                setDoraText('そろそろ出してやる。');
            else if(r===1)
                setDoraText('終わり'+colorArray[dora.colorNumber].dragonDa+'。頑張ったな。');
            else if(r===2)
                setDoraText('もう出してやろう。');
            else if(r===3)
                setDoraText('ぐへへ、気持ちよかったな。');
        }
        wait = 3000;
    }
    // 疲れて動けない
    else if(stage === 'tired')
    {
        if(!gameOver)
        {
            let r = randomInt(4);
            if(r===0)
                setKemoText('ひいいい…。');
            else if(r===1)
                setKemoText('はあ、はあ、はあ、…。');
            else if(r===2)
                setKemoText('もう、だめ、…。');
            else if(r===3)
                setKemoText('もう、むり、…。');
        }else{
            setKemoText('…。');
        }
        wait = 6000;
        kemo.sprite.x = 0;
        nextDistance = -256;
        dora.sprite.x = Math.floor(nextDistance + 128);
        dora.sprite.setRange(1/4, 1/16, 1/4, 1/16);
        dora.sprite.scale(-192, 192);
        bar[2].sprite.translate(512, 0);
        bar[2].sprite.scale(4,0);
    }
    // 口
    else if(stage === 'talkMouth')
    {
        if(!gameOver)
        {
            if(kemo.colorNumber < 6 && dora.colorNumber < 6 && loopInt(kemo.colorNumber - 1, 6) === dora.colorNumber)
            {
                speedPlay += 0.2;
                setDoraText(
                    colorArray[kemo.colorNumber].doraColorName +
                    'の子は滑りがよいから好物なの'+colorArray[dora.colorNumber].dragonDa+
                    '。では口の中で'+savore[currentSavore].suru+'ぞ。'
                );
            }
            else if(kemo.colorNumber === dora.colorNumber)
            {
                strongPlay += 0.3;
                setDoraText(
                    colorArray[kemo.colorNumber].doraColorName +
                    'の子の味は大好物なの'+colorArray[dora.colorNumber].dragonDa+
                    '。口の中で強く'+savore[currentSavore].suru+'から覚悟しろよ。'
                );
            }
            else if(kemo.colorNumber < 6 && dora.colorNumber < 6 && loopInt(kemo.colorNumber + 1, 6) === dora.colorNumber)
            {
                longPlay += 0.2;
                setDoraText(colorArray[kemo.colorNumber].doraColorName +
                    'の子は食べ応えがあって好物なの'+colorArray[dora.colorNumber].dragonDa+
                    '。では口の中で'+savore[currentSavore].suru+'ぞ。'
                );
            }
            else if(
                kemo.colorNumber < 6 && dora.colorNumber < 6 &&
                loopInt(kemo.colorNumber + 3, 6) === dora.colorNumber ||
                kemo.colorNumber >= 6 && dora.colorNumber >= 6 &&
                loopInt(kemo.colorNumber + 1, 2) === loopInt(dora.colorNumber, 2)
            )
            {
                speedPlay += 0.1;
                longPlay += 0.1;
                strongPlay += 0.1;
                setDoraText(colorArray[kemo.colorNumber].doraColorName +
                    'の'+kemo.rorishota+'は大好きな香りなの'+
                    colorArray[dora.colorNumber].dragonDa+
                    '。口でじっくり'+savore[currentSavore].shite+'やる。'
                );
            }
            else
            {
                let r = randomInt(4);
                if(r===0)
                    setDoraText(
                        'まずは口で　'+
                        savore[currentSavore].sound0+
                        savore[currentSavore].sound1+
                        savore[currentSavore].sound0+
                        savore[currentSavore].sound1+
                        savore[currentSavore].shite+
                        'やる。気持ちよくても耐えろ。'
                    );
                else if(r===1)
                    setDoraText(
                        'まずは口を使った　'+
                        savore[currentSavore].sound0+
                        savore[currentSavore].sound1+
                        savore[currentSavore].sound0+
                        savore[currentSavore].sound1+
                        savore[currentSavore].shi+
                        'の刑'+colorArray[dora.colorNumber].dragonDa+'。すごく気持ちいぞ。'
                );
                else if(r===2)
                    setDoraText(
                        'まずは口を使って美味しく　'+
                        savore[currentSavore].sound0+
                        savore[currentSavore].sound1+
                        savore[currentSavore].sound0+
                        savore[currentSavore].sound1+
                        savore[currentSavore].suru+
                        'からな。覚悟しろ。'
                    );
                else if(r===3)
                    setDoraText(
                        'まずは口の中で　'+
                        savore[currentSavore].sound0+
                        savore[currentSavore].sound1+
                        savore[currentSavore].sound0+
                        savore[currentSavore].sound1+
                        savore[currentSavore].shita+
                        'らどうなるかな。頑張れよ。'
                    );
            }
            wait = 3000;
        }
        else wait = 1;
    }
    // 腹
    else if(stage === 'talkStomach')
    {
        if(!gameOver)
        {
            let r = randomInt(4);
            if(r===0)
                setDoraText(
                    '次は腹で　'+
                    savore[currentSavore].sound0+
                    savore[currentSavore].sound1+
                    savore[currentSavore].sound0+
                    savore[currentSavore].sound1+
                    savore[currentSavore].shite+
                    'やる。気持ちよくても耐えろ。'
                );
            else if(r===1)
                setDoraText(
                    '次は腹を使った　'+
                    savore[currentSavore].sound0+
                    savore[currentSavore].sound1+
                    savore[currentSavore].sound0+
                    savore[currentSavore].sound1+
                    savore[currentSavore].shi+
                    'の刑'+colorArray[dora.colorNumber].dragonDa+'。すごく気持ちいぞ。'
            );
            else if(r===2)
                setDoraText(
                    '次は腹を使って　'+
                    savore[currentSavore].sound0+
                    savore[currentSavore].sound1+
                    savore[currentSavore].sound0+
                    savore[currentSavore].sound1+
                    savore[currentSavore].suru+
                    'からな。覚悟しろ。'
                );
            else if(r===3)
                setDoraText(
                    '次は腹の中で　'+
                    savore[currentSavore].sound0+
                    savore[currentSavore].sound1+
                    savore[currentSavore].sound0+
                    savore[currentSavore].sound1+
                    savore[currentSavore].shita+
                    'らどうなるかな。頑張れよ。'
                );
            wait = 3000;
        }
        else wait = 1;
    }
    // 腸
    else if(stage === 'talkCrotch')
    {
        if(!gameOver)
        {
            let r = randomInt(4);
            if(r===0)
                setDoraText(
                    '次は股ぐらで　'+
                    savore[currentSavore].sound0+
                    savore[currentSavore].sound1+
                    savore[currentSavore].sound0+
                    savore[currentSavore].sound1+
                    savore[currentSavore].shite+
                    'やる。気持ちよくても耐えろ。'
                );
            else if(r===1)
                setDoraText(
                    '次は股ぐらを使った　'+
                    savore[currentSavore].sound0+
                    savore[currentSavore].sound1+
                    savore[currentSavore].sound0+
                    savore[currentSavore].sound1+
                    savore[currentSavore].shi+
                    'の刑'+colorArray[dora.colorNumber].dragonDa+'。すごく気持ちいぞ。'
            );
            else if(r===2)
                setDoraText(
                    '次は股ぐらを使って　'+
                    savore[currentSavore].sound0+
                    savore[currentSavore].sound1+
                    savore[currentSavore].sound0+
                    savore[currentSavore].sound1+
                    savore[currentSavore].suru+
                    'からな。覚悟しろ。'
                );
            else if(r===3)
                setDoraText(
                    '次は股ぐらの中で　'+
                    savore[currentSavore].sound0+
                    savore[currentSavore].sound1+
                    savore[currentSavore].sound0+
                    savore[currentSavore].sound1+
                    savore[currentSavore].shita+
                    'らどうなるかな。頑張れよ。'
                );
            wait = 3000;
        }
        else wait = 1;
    }
    // 尻
    else if(stage === 'talkHip')
    {
        if(!gameOver)
        {
            let r = randomInt(4);
            if(r===0)
                setDoraText(
                    '最後は尻で　'+
                    savore[currentSavore].sound0+
                    savore[currentSavore].sound1+
                    savore[currentSavore].sound0+
                    savore[currentSavore].sound1+
                    savore[currentSavore].shite+
                    'やる。気持ちよくても耐えろ。'
                );
            else if(r===1)
                setDoraText(
                    '最後は尻を使った　'+
                    savore[currentSavore].sound0+
                    savore[currentSavore].sound1+
                    savore[currentSavore].sound0+
                    savore[currentSavore].sound1+
                    savore[currentSavore].shi+
                    'の刑'+colorArray[dora.colorNumber].dragonDa+'。すごく気持ちいぞ。'
            );
            else if(r===2)
                setDoraText(
                    '最後は尻を使って　'+
                    savore[currentSavore].sound0+
                    savore[currentSavore].sound1+
                    savore[currentSavore].sound0+
                    savore[currentSavore].sound1+
                    savore[currentSavore].suru+
                    'からな。覚悟しろ。'
                );
            else if(r===3)
                setDoraText(
                    '最後は尻の中で　'+
                    savore[currentSavore].sound0+
                    savore[currentSavore].sound1+
                    savore[currentSavore].sound0+
                    savore[currentSavore].sound1+
                    savore[currentSavore].shita+
                    'らどうなるかな。頑張れよ。'
                );
            wait = 3000;
        }
        else wait = 1;
    }
    // 口に入れられた
    else if(stage === 'cryMouth')
    {
        if(!gameOver)
        {
            let r = randomInt(8);
            if(r===0)      setKemoText('ボリュームのある　くちに、いれられた…。');
            else if(r===1) setKemoText('たべられちゃった…。');
            else if(r===2) setKemoText('ドラゴンさんのくち、きもちい…。');
            else if(r===3) setKemoText('ふかふかの　しただ…。');
            else if(r===4) setKemoText('にくあつなくちに、いれられた…。');
            else if(r===5) setKemoText('ベッドみたい…。');
            else if(r===6) setKemoText('くわれた…。');
            else if(r===7) setKemoText('ドラゴンさんの　いいかおり…。');
            wait = 3000;
            sound(120, 240, 0.5);
            dora.sprite.setRange(1/4, 1/16, 1/4, 1/16);
            kemo.sprite.translate(-80, 96);
            kemo.sprite.scale(-32, 32);
            kemo.sprite.setRange(1/4,2/4,1/4,1/4);
        }
        else wait = 1;
    }
    // 腹に入れられた
    else if(stage === 'cryStomach')
    {
        if(!gameOver)
        {
            let r = randomInt(8);
            if(r===0)      setKemoText('おなかのなかに、いれられちゃった…。');
            else if(r===1) setKemoText('にくあつすぎる…。');
            else if(r===2) setKemoText('ボリュームが　ありすぎる…。');
            else if(r===3) setKemoText('ふかふかだ…。');
            else if(r===4) setKemoText('のまれた…。');
            else if(r===5) setKemoText('ここはおなかのなか　か…。');
            else if(r===6) setKemoText('こんなとこで　されたら、もれちゃうよ…。');
            else if(r===7) setKemoText('ドラゴンさんのいいかおりが　たちこめてる…。');
            wait = 3000;
            sound(100, 200, 0.5);
            dora.sprite.setRange(1/4, 3/16, 1/4, 1/16);
            kemo.sprite.translate(-88, -80);
            kemo.sprite.scale(-32, 32);
            kemo.sprite.setRange(1/4,1/4,1/4,1/4);
        }
        else wait = 1;
    }
    // 腸に入れられた
    else if(stage === 'cryCrotch')
    {
        if(!gameOver)
        {
            let r = randomInt(8);
            if(r===0)      setKemoText('またぐらのなかとか　きつい…。');
            else if(r===1) setKemoText('きゅうくつだよ…。');
            else if(r===2) setKemoText('こんなところで　しないで…。');
            else if(r===3) setKemoText('こんなところ、もういや…。');
            else if(r===4) setKemoText('ここも　ふかふかだ…。');
            else if(r===5) setKemoText('またぐらとか　いや…。');
            else if(r===6) setKemoText('こんな　きついとこじゃ、もっと　もらしちゃいそう…。');
            else if(r===7) setKemoText('ドラゴンさんの　いいかおりがする…。');
            wait = 3000;
            sound(80, 160, 0.5);
            dora.sprite.setRange(1/4, 5/16, 1/4, 1/16);
            kemo.sprite.translate(-64, -144);
            kemo.sprite.scale(-32, 32);
            kemo.sprite.setRange(1/4,2/4,1/4,1/4);
        }
        else wait = 1;
    }
    // 尻に入れられた
    else if(stage === 'cryHip')
    {
        if(!gameOver)
        {
            let r = randomInt(8);
            if(r===0)      setKemoText('おしりのなか、きついよ…。');
            else if(r===1) setKemoText('こんなところ　むり…。');
            else if(r===2) setKemoText('おしりとか　えっちだよ…。');
            else if(r===3) setKemoText('こんなとこ、もうむりだよ…。');
            else if(r===4) setKemoText('おしりのなかでまで…。');
            else if(r===5) setKemoText('おしりのなか　きもちいよ…。');
            else if(r===6) setKemoText('ここきつすぎて　だめ…。');
            else if(r===7) setKemoText('ここも　ドラゴンさんの　いいかおり…。');
            wait = 3000;
            sound(60, 120, 0.5);
            dora.sprite.setRange(1/4, 7/16, 1/4, 1/16);
            kemo.sprite.translate(80,-160);
            kemo.sprite.scale(-32, 32);
            kemo.sprite.setRange(1/4,2/4,1/4,1/4);
        }
        else wait = 1;
    }
    // 〜しないでの言葉
    else if(
        stage === 'answerMouth' ||
        stage === 'answerStomach' ||
        stage === 'answerCrotch' ||
        stage === 'answerHip'
    )
    {
        if(!gameOver)
        {
            let r = randomInt(16);
            if(r===0)
                setKemoText(
                    savore[currentSavore].kemoSa+
                    'ないで…。もれちゃう…。'
                );
            else if(r===1)
                setKemoText(
                    savore[currentSavore].kemoShita+
                    'ら　でちゃうよ…。'
            );
            else if(r===2)
                setKemoText(
                    savore[currentSavore].kemoShite+
                    'も　でないように　がまんしなきゃ…。'
                );
            else if(r===3)
                setKemoText(
                    savore[currentSavore].kemoSare+
                    'たら　もらしちゃうよ…。'
                );
            else if(r===4)
                setKemoText(
                    savore[currentSavore].kemoSuru+
                    'な…。おねがいだから…。'
                );
            else if(r===5)
                setKemoText(
                    savore[currentSavore].kemoShita+
                    'ら　またもれる…。'
            );
            else if(r===6)
                setKemoText(
                    savore[currentSavore].kemoShite+
                    'も　あまり　もらさないからね…。'
                );
            else if(r===7)
                setKemoText(
                    savore[currentSavore].kemoSare+
                    'たら　でちゃう…。'
                );
            else if(r===8) setKemoText('やさしくして…。');
            else if(r===9) setKemoText('きもちよくしてね…。');
            else if(r===10) setKemoText('あんまり　'+savore[currentSavore].kemoShi+'すぎないでね…。');
            else if(r===11) setKemoText('あんまり　'+savore[currentSavore].kemoSa+'ないでね…。');
            else if(r===12) setKemoText('きもちよすぎるのは　だめだよ…。');
            else if(r===13) setKemoText('やだ、もれちゃうよ…。');
            else if(r===14) setKemoText('やだ、でちゃうよ…。');
            else if(r===15) setKemoText('きもちよく　しすぎないで…。');
            wait = 3000;
        }
        else wait = 1;
    }
    // 口で味わうアニメーション前半
    else if(
        stage === 'savore0Mouth'
    )
    {
        if(!gameOver)
        {
            let r = randomInt(8);
            if(r===0)      setDoraText('どう'+colorArray[dora.colorNumber].dragonDa+'、'+savore[currentSavore].sare+'て気持ちいか。');
            else if(r===1) setDoraText('ぐへへ、'+savore[currentSavore].shite+'いて'+colorArray[dora.colorNumber].dragonOne + 'も美味しいぞ。');
            else if(r===2) setDoraText('この'+savore[currentSavore].shi+'方に耐えられるかな。');
            else if(r===3) setDoraText(
                savore[currentSavore].sound0+
                savore[currentSavore].sound1+
                savore[currentSavore].sound0+
                savore[currentSavore].sound1+
                savore[currentSavore].sound0+
                savore[currentSavore].sound1+
            '。');
            else if(r===4) setDoraText(
                savore[currentSavore].sound0+'っ'+
                savore[currentSavore].sound1+
                savore[currentSavore].sound0+'っ'+
                savore[currentSavore].sound1+
            '。');
            else if(r===5) setDoraText(
                savore[currentSavore].sound0+
                savore[currentSavore].sound1+'ん、'+
                savore[currentSavore].sound0+
                savore[currentSavore].sound1+'ん、'
            );
            else if(r===6) setDoraText(
                savore[currentSavore].sound0+'っ'+
                savore[currentSavore].sound1+'ん、'+
                savore[currentSavore].sound0+'っ'+
                savore[currentSavore].sound1+'ん、'
            );
            else if(r===7) setDoraText('どう'+colorArray[dora.colorNumber].dragonDa+'、'+
                savore[currentSavore].sound0+
                savore[currentSavore].sound1+
                savore[currentSavore].sound0+
                savore[currentSavore].sound1+
            'されるのは。');
            animation = -100;
            if(dora.colorNumber === 6)
            {
                speedPlay += 1;
            }
            if(dora.colorNumber === 7)
            {
                longPlay += 1;
                speedPlay -= 0.4;
                strongPlay += 0.4;
            }
            wait = 12000 * longPlay;
        }
        else wait = 1;
    }
    // 口以外で味わうアニメーション前半
    else if(
        stage === 'savore0Stomach' ||
        stage === 'savore0Crotch' ||
        stage === 'savore0Hip'
    )
    {
        if(!gameOver)
        {
            let r = randomInt(8);
            if(r===0)      setDoraText('どう'+colorArray[dora.colorNumber].dragonDa+'、'+savore[currentSavore].sare+'て気持ちいか。');
            else if(r===1) setDoraText('ぐへへ、'+savore[currentSavore].shite+'いて' + colorArray[dora.colorNumber].dragonOne + 'も気持ちいぞ。');
            else if(r===2) setDoraText('この'+savore[currentSavore].shi+'方に耐えられるかな。');
            else if(r===3) setDoraText(
                savore[currentSavore].sound0+
                savore[currentSavore].sound1+
                savore[currentSavore].sound0+
                savore[currentSavore].sound1+
                savore[currentSavore].sound0+
                savore[currentSavore].sound1+
            '。');
            else if(r===4) setDoraText(
                savore[currentSavore].sound0+'っ'+
                savore[currentSavore].sound1+
                savore[currentSavore].sound0+'っ'+
                savore[currentSavore].sound1+
            '。');
            else if(r===5) setDoraText(
                savore[currentSavore].sound0+
                savore[currentSavore].sound1+'ん、'+
                savore[currentSavore].sound0+
                savore[currentSavore].sound1+'ん、'
            );
            else if(r===6) setDoraText(
                savore[currentSavore].sound0+'っ'+
                savore[currentSavore].sound1+'ん、'+
                savore[currentSavore].sound0+'っ'+
                savore[currentSavore].sound1+'ん、'
            );
            else if(r===7) setDoraText('どう'+colorArray[dora.colorNumber].dragonDa+'、'+
                savore[currentSavore].sound0+
                savore[currentSavore].sound1+
                savore[currentSavore].sound0+
                savore[currentSavore].sound1+
            'されるのは。');
            animation = -100;
            wait = 12000 * longPlay;
        }
        else wait = 1;
    }
    // 味わうアニメーション後半
    else if(
        stage === 'savore1Mouth' ||
        stage === 'savore1Stomach' ||
        stage === 'savore1Crotch' ||
        stage === 'savore1Hip'
    )
    {
        if(!gameOver)
        {
            setKemoText(feelCry[Math.floor(Math.min((feel-1) / 4, 1) * 15)]);
            wait = 12000 * longPlay;
        }
        else wait = 1;
    }
    // 味わうアニメーション後半
    else if(
        stage === 'complaintMouth' ||
        stage === 'complaintStomach' ||
        stage === 'complaintCrotch' ||
        stage === 'complaintHip'
    )
    {
        if(!gameOver)
        {
            setKemoText(complaint[Math.floor(Math.min((feel-1) / 4, 1) * 15)]);
            wait = 3000;
        }
        else wait = 1;
    }
    // 終わりの言葉　尻以外
    else if(
        stage === 'finishMouth' ||
        stage === 'finishStomach' ||
        stage === 'finishCrotch'
    )
    {
        if(!gameOver)
        {
            if(wantToLeak)
            {
                if(dragonCc<=0)
                {
                    setDoraText('どうした。全然出ないぞ。');
                    longPlay -= 0.2;
                }
                else if(dragonCc<5)
                {
                    setDoraText('ほとんど出さなかったな。次はかなり念入りにしてやるから、もっと'+kemo.rorishota+'の蜜を出せ。');
                    longPlay += 0.2;
                    strongPlay += 0.2;
                    speedPlay += 0.2;
                }
                else if(dragonCc<10)
                {
                    setDoraText('少ししか出さなかったな。次は念入りにしてやるから、もっと'+kemo.rorishota+'の蜜を出せ。');
                    longPlay += 0.2;
                    strongPlay += 0.2;
                }
                else if(dragonCc<15)
                {
                    setDoraText('出る量が少なめ'+colorArray[dora.colorNumber].dragonDa+
                        'な。次は少し念入りにしてやるから、もっと'+kemo.rorishota+'の蜜を出せ。');
                    strongPlay += 0.2;
                }
                else if(dragonCc<20) setDoraText('まあまあの量の蜜を出したな。えらいぞ。');
                else if(dragonCc<25) setDoraText('多めに蜜を出したな。えらいぞ。');
                else setDoraText('たっぷりの蜜を出したな。えらいぞ。');
            }
            else
            {
                if(dragonCc<=0)
                {
                    setDoraText('どうした。全然出ないぞ。');
                    longPlay -= 0.2;
                }
                else if(dragonCc<5)       setDoraText('ほとんど蜜を出さなかったな。えらいぞ。');
                else if(dragonCc<10) setDoraText('少ししか蜜を出さなかったな。えらいぞ。');
                else if(dragonCc<15) setDoraText('出る蜜の量が少なめ'+colorArray[dora.colorNumber].dragonDa+'ったな。えらいぞ。');
                else if(dragonCc<20)
                {
                    setDoraText('ちょっと蜜を出し過ぎ'+colorArray[dora.colorNumber].dragonDa+'ぞ。次は少しやさしめにしてやるから、少しは耐えろ。');
                    strongPlay -= 0.2;
                }
                else if(dragonCc<25)
                {
                    setDoraText('蜜を多く出し過ぎ'+colorArray[dora.colorNumber].dragonDa+'。次はやさしめにしてやるから、少しは耐えろ。');
                    longPlay -= 0.2;
                    strongPlay -= 0.2;
                }
                else
                {
                    setDoraText('蜜を大量に出し過ぎ'+colorArray[dora.colorNumber].dragonDa+'。次はかなりやさしめにしてやるから、少しは耐えろ。');
                    longPlay -= 0.2;
                    strongPlay -= 0.2;
                    speedPlay -= 0.2;
                }
            }
            dragonCc = 0;
            wait = 3000;
        }
        else wait = 1;
    }
    // 終わりの言葉　尻
    else if(
        stage === 'finishHip'
    )
    {
        if(!gameOver)
        {
            if(wantToLeak)
            {
                if(dragonTotalCc < 48 && !flushColor)
                {
                    if(dragonCc<=0)
                    {
                        setDoraText('どうした。全然出ないぞ。');
                        longPlay -= 0.2;
                    }
                    else if(dragonCc<5)
                    {
                        setDoraText('ほとんど出さなかったな。もっと'+kemo.rorishota+'の蜜出せ。');
                        longPlay += 0.2;
                        strongPlay += 0.2;
                        speedPlay += 0.2;
                    }
                    else if(dragonCc<10)
                    {
                        setDoraText('少ししか出さなかったな。もっと'+kemo.rorishota+'の蜜を出せ。');
                        longPlay += 0.2;
                        strongPlay += 0.2;
                    }
                    else if(dragonCc<15)
                    {
                        setDoraText('出る量が少なめ'+colorArray[dora.colorNumber].dragonDa+'な。もっと'+kemo.rorishota+'の蜜出せ。');
                        strongPlay += 0.2;
                    }
                    else if(dragonCc<20) setDoraText('まあまあの量の蜜を出したな。えらいぞ。');
                    else if(dragonCc<25) setDoraText('多めに蜜を出したな。えらいぞ。');
                    else setDoraText('たっぷりの蜜を出したな。えらいぞ。');
                }
                else setDoraText(
                    'ぐへへへへ、あんまり蜜を出すから' + colorArray[dora.colorNumber].dragonOne +
                    'はもう' + colorArray[dora.colorNumber].doraColorName + colorArray[dora.colorNumber].dragonDa + 
                    '。たくさん出してくれて礼を言うぞ。');
            }
            else
            {
                if(dragonTotalCc < 48 && !flushColor)
                {
                    if(dragonCc<=0)
                    {
                        setDoraText('どうした。全然蜜が出ないぞ。');
                        longPlay -= 0.2;
                    }
                    else if(dragonCc<5)  setDoraText('ほとんど'+kemo.rorishota+'の蜜が出さなかったな。えらいぞ。');
                    else if(dragonCc<10) setDoraText('少ししか'+kemo.rorishota+'の蜜が出さなかったな。えらいぞ。');
                    else if(dragonCc<15) setDoraText('蜜が出る量が少なめ'+colorArray[dora.colorNumber].dragonDa+'ったな。えらいぞ。');
                    else if(dragonCc<20)
                    {
                        setDoraText('ちょっと蜜を出し過ぎ'+colorArray[dora.colorNumber].dragonDa+'ぞ。少しは耐えろ。');
                        strongPlay -= 0.2;
                    }
                    else if(dragonCc<25)
                    {
                        setDoraText('蜜を多く出し過ぎ'+colorArray[dora.colorNumber].dragonDa+'。少しは耐えろ。');
                        longPlay -= 0.2;
                        strongPlay -= 0.2;
                    }
                    else
                    {
                        setDoraText('蜜を大量に出し過ぎ'+colorArray[dora.colorNumber].dragonDa+'。少しは耐えろ。');
                        longPlay -= 0.2;
                        strongPlay -= 0.2;
                        speedPlay -= 0.2;
                    }
                }
                else setDoraText(
                    'あんまり蜜を出すから、' + colorArray[dora.colorNumber].dragonOne +
                    'はもう' + colorArray[dora.colorNumber].doraColorName + colorArray[dora.colorNumber].dragonDa + 
                    '。悪い子め。');
            }
            dragonCc = 0;
            wait = 3000;
        }
        else wait = 1;
    }
    else if(
        stage === 'dry'
    )
    {
    }
    else if(
        stage === 'result'
    )
    {
    }
    else if(
        stage === 'toTitle'
    )
    {
    }
    else if(
        stage === 'keep'
    )
    {
        wait = 1;
    }

    draw();

    previousTimeStamp = timeStamp;
    requestAnimationFrame(animate);
};
animate(0);

