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
        name: 'red',
        light:  [1.0, 0.6, 0.6, 1.0],
        middle: [0.8, 0.4, 0.4, 1.0],
        dark:   [0.6, 0.2, 0.2, 1.0],
    },
    {
        kemoColorName: 'きいろ',
        doraColorName: '黄色',
        name: 'yellow',
        light:  [1.0, 1.0, 0.6, 1.0],
        middle: [0.8, 0.8, 0.4, 1.0],
        dark:   [0.6, 0.6, 0.2, 1.0],
    },
    {
        kemoColorName: 'みどりいろ',
        doraColorName: '緑色',
        name: 'green',
        light:  [0.6, 1.0, 0.6, 1.0],
        middle: [0.4, 0.8, 0.4, 1.0],
        dark:   [0.2, 0.6, 0.2, 1.0],
    },
    {
        kemoColorName: 'みずいろ',
        doraColorName: '水色',
        name: 'cyan',
        light:  [0.6, 1.0, 1.0, 1.0],
        middle: [0.4, 0.8, 0.8, 1.0],
        dark:   [0.2, 0.6, 0.6, 1.0],
    },
    {
        kemoColorName: 'あおいろ',
        doraColorName: '青色',
        name: 'blue',
        light:  [0.6, 0.6, 1.0, 1.0],
        middle: [0.4, 0.4, 0.8, 1.0],
        dark:   [0.2, 0.2, 0.6, 1.0],
    },
    {
        kemoColorName: 'むらさきいろ',
        doraColorName: '紫色',
        name: 'magenta',
        light:  [1.0, 0.6, 1.0, 1.0],
        middle: [0.8, 0.4, 0.8, 1.0],
        dark:   [0.6, 0.2, 0.6, 1.0],
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

    buttonLElem.style.display = 'none';
    buttonCElem.style.display = 'none';
    buttonRElem.style.display = 'none';

    if(tankCc + damCc > 0 || stage==='result')
        textElem.textContent = text;
    else
        textElem.textContent = '…。';
    textElem.style.display = 'block';

    textElem.className = colorArray[kemo.colorNumber].name;
};
// ドラ色テキストをセット
const setDoraText = function(text)
{

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
buttonLElem.addEventListener('pointerdown',function(e)
{
    leftButtonDown = true;
});
buttonCElem.addEventListener('pointerdown',function(e)
{
    centerButtonDown = true;
});
buttonRElem.addEventListener('pointerdown',function(e)
{
    rightButtonDown = true;
});

//------------------

// ジュース
let juice = new Array(3);
let juiceArray = randomArray(6, 3);

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
    bar[i].sprite.translate(-224 - 16*i, 0);
    if(i===2) bar[i].sprite.translate(512, 0);
    bar[i].sprite.scale(8,100);
    if(i===0) bar[i].sprite.scale(8, 0);
    if(i===2) bar[i].sprite.scale(8, 0);
    bar[i].sprite.setRange(i/16, 2/4, 1/16, 1/4);
    bar[i].colorNumber = kemo.colorNumber;
    bar[i].sprite.setColor(
        colorArray[bar[i].colorNumber].middle,
        colorArray[bar[i].colorNumber].light,
        colorArray[bar[i].colorNumber].dark,
    );
}

// 頭の悪いえっちな配列
const savore = 
[
    {
        suru: '揉む',
        sa: '揉ま',
        shi: '揉み',
        shite: '揉んで',
        kemoSuru: 'もむ',
        kemoSa: 'もま',
        kemoShi: 'もみ',
        kemoShite: 'もんで',
        sound: 'もみ',
        animation: [2, 1, 0, 1],
        leakCc: 0.5,
    },
    {
        suru: 'しごく',
        sa: 'しごか',
        shi: 'しごき',
        shite: 'しごいて',
        kemoSuru: 'しごく',
        kemoSa: 'しごか',
        kemoShi: 'しごき',
        kemoShite: 'しごいて',
        sound: 'ぬぷ',
        animation: [3, 1, 4, 1],
        leakCc: 2,
    },
    {
        suru: 'こねる',
        sa: 'こねら',
        shi: 'こね',
        shite: 'こねて',
        kemoSuru: 'こねる',
        kemoSa: 'こねら',
        kemoShi: 'こね',
        kemoShite: 'こねて',
        sound: 'もにゅ',
        animation: [4, 2, 3, 0],
        leakCc: 0.8,
    },
    {
        suru: 'ねぶる',
        sa: 'ねぶら',
        shi: 'ねぶり',
        shite: 'ねぶって',
        kemoSuru: 'ねぶる',
        kemoSa: 'ねぶら',
        kemoShi: 'ねぶり',
        kemoShite: 'ねぶって',
        sound: 'ぬちゃ',
        animation: [3, 2, 4, 0],
        leakCc: 0.2,
    },
    {
        suru: '搾る',
        sa: '搾ら',
        shi: '搾り',
        shite: '搾って',
        kemoSuru: 'しぼる',
        kemoSa: 'しぼら',
        kemoShi: 'しぼり',
        kemoShite: 'しぼって',
        sound: 'もぎゅ',
        animation: [4, 0, 3, 1],
        leakCc: 3,
    },
    {
        suru: '吸う',
        sa: '吸わ',
        shi: '吸い',
        shite: '吸って',
        kemoSuru: 'すう',
        kemoSa: 'すわ',
        kemoShi: 'すい',
        kemoShite: 'すって',
        sound: 'もちゅ',
        animation: [0, 3, 2, 1],
        leakCc: 4,
    },
];

// おもらし台詞配列
const ccCry =
[
    'からだのすいぶんは、うるおってる…。',
    'からだのすいぶんは、すこしだけへってる…。',
    'からだのすいぶんは、すこしへってる…。',
    'からだのすいぶんが、へってきた…。',
    'からだのすいぶんが、だんだんなくなってくる…。',
    'すいぶんが、なくなってきた…。',
    'すいぶんが、うばわれてきた…。',
    'すいぶんがもっとほしい…。',
    'すいぶんがほしい…。',
    'すいぶんがそろそろひつようだ…。',
    'からだのすいぶんが、すくなくなってきた…。',
    'からだのすいぶんが、もうすくない…。',
    'そろそろひからびちゃうかも…。',
    'ひからびそう…。',
    'だめ…ひからびる…。',
    'もうだめ…すぐにひからびちゃう…。',
];
// 気持ちよがる台詞配列
const feelCry =
[
    'まだへいき…。',
    'ちょっときもちいかも…。',
    'すこしずつ、きもちよくなってきた…。',
    'きもちいかも…。',
    'きもちい…。',
    'やだ、こんなにきもちいの…。',
    'ひいい、きもちよくてやばい…。',
    'やああん、きもちいよ…。',
    'きもちよくて、もういやだあ…。',
    'だめえ、こんなのむりい…。',
    'あああ、もうやめてえ、んあ、',
    'あ、あ、これいじょう、やめ、あ、',
    'からだがああ、',
    'ひ、もう、んあ、',
    'あ、あ、あ、だめええ、',
    'からだおかしくなる、もうやめ、',
];

let previousTimeStamp = 0;
let animationTimeStamp = 0;
let animationElapsed = 0;
let start = true;
let elapsed = 0;

let longPlay = 1.0;
let speedPlay = 1.0;
let strongPlay = 1.0;

let tankCc = 100;
let damCc = 0;
let dragonCc = 0;
let dragonTotalCc = 0;
let feel = 0;
let leak = 0.01;
let dragon = 1;

let question = -1;
let savoreArray = [0,1,2];
let currentSavore = 0;
let wantToLeak = false;

let animation = 0;
let wait = 0;

let nextDistance = 512;
let nextObject = 'dragon';
let nextRight = true;

let stage = 'title';

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
    feel += momi*elapsed/80000 * speedPlay * strongPlay;
    let c = Math.min(elapsed/10000*momi*feel * speedPlay * strongPlay, tankCc);
    tankCc -= c;
    damCc += c;
    let d = Math.min(elapsed/10000*momi*feel * savore[currentSavore].leakCc, damCc);
    damCc -= d;
    dragonCc += d;
    dragonTotalCc += d;
    bar[0].sprite.y = Math.round(-100 + damCc);
    bar[1].sprite.y = Math.round(-100 + tankCc);
    bar[2].sprite.y = Math.round(-100 + dragonTotalCc);
    bar[0].sprite.scale(8, Math.round(damCc));
    bar[1].sprite.scale(8, Math.round(tankCc));
    bar[2].sprite.scale(8, Math.round(dragonTotalCc));
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
                tankCc += 20;
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
                tankCc += 20;
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
                tankCc += 20;
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
                let r = randomInt(3);
                if(r)
                {
                    stage = 'eatenSoft';
                    setDoraText('わざわざ起こしてくれたのか。やさしめに味わってやろう。');
                    strongPlay -= 0.2;
                    kemo.sprite.setRange(2/4, 1/4, 1/4, 1/4);
                    dora.sprite.setRange(1/4, 0/16, 1/4, 1/16);
                    dora.sprite.translate(0,0);
                    kemo.sprite.translate(-128,-48);
                    bar[2].sprite.translate(240, 0);
                    bar[2].sprite.setColor(
                        colorArray[dora.colorNumber].middle,
                        colorArray[dora.colorNumber].light,
                        colorArray[dora.colorNumber].dark,
                    );
                }
                else
                {
                    stage = 'eatenHard';
                    setDoraText('うるさいな。せっかく気持ちよく寝てたのに。激しめに味わってやろう。');
                    speedPlay += 0.2;
                    kemo.sprite.setRange(2/4, 1/4, 1/4, 1/4);
                    dora.sprite.setRange(1/4, 0/16, 1/4, 1/16);
                    dora.sprite.translate(0,0);
                    kemo.sprite.translate(-128,-48);
                    bar[2].sprite.translate(240, 0);
                    bar[2].sprite.setColor(
                        colorArray[dora.colorNumber].middle,
                        colorArray[dora.colorNumber].light,
                        colorArray[dora.colorNumber].dark,
                    );
                }
                leftButtonDown = false;
                wait = 3000;
            }
            else if(centerButtonDown)
            {
                let r = randomInt(3);
                if(r===0)
                {
                    stage = 'eatenAngry';
                    setDoraText('おっと、我を無視しようとするとはいい度胸だな。強めに味わってこらしめてやろう。');
                    strongPlay += 0.2;
                    kemo.sprite.setRange(2/4, 1/4, 1/4, 1/4);
                    dora.sprite.setRange(1/4, 0/16, 1/4, 1/16);
                    dora.sprite.translate(0,0);
                    kemo.sprite.translate(-128,-48);
                    bar[2].sprite.translate(240, 0);
                }
                else if(r===1)
                {
                    stage = 'eatenAngry';
                    setDoraText('我を無視しようとしたな。激しめに味わってこらしめてやろう。');
                    speedPlay += 0.2;
                    kemo.sprite.setRange(2/4, 1/4, 1/4, 1/4);
                    dora.sprite.setRange(1/4, 0/16, 1/4, 1/16);
                    dora.sprite.translate(0,0);
                    kemo.sprite.translate(-128,-48);
                    bar[2].sprite.translate(240, 0);
                }
                else if(r===2)
                {
                    stage = 'walk';
                    setKemoText('こんなりゅうほっとけ。');
                    dragon--;
                }
                centerButtonDown = false;
                wait = 3000;
            }
            else if(rightButtonDown)
            {
                stage = 'kick';
                setKemoText('えい。');
                kemo.sprite.setRange(0/4, 1/4, 1/4, 1/4);
                kemo.sprite.x = 16;
                rightButtonDown = false;
                wait = 3000;
            }
            else if(wait <= 0)
            {
                let r = randomInt(2);
                if(r)
                {
                    stage = 'eatenSoft';
                    setDoraText('おとなしく待ってくれたのか。ゆっくりめにしてやろう。');
                    speedPlay -= 0.2;
                    kemo.sprite.setRange(2/4, 1/4, 1/4, 1/4);
                    dora.sprite.setRange(1/4, 0/16, 1/4, 1/16);
                    dora.sprite.translate(0,0);
                    kemo.sprite.translate(-128,-48);
                    bar[2].sprite.translate(240, 0);
                }
                else
                {
                    stage = 'eatenHard';
                    setDoraText('何もしないなら食うぞ。');
                    kemo.sprite.setRange(2/4, 1/4, 1/4, 1/4);
                    dora.sprite.setRange(1/4, 0/16, 1/4, 1/16);
                    dora.sprite.translate(0,0);
                    kemo.sprite.translate(-128,-48);
                    bar[2].sprite.translate(240, 0);
                }
                wait = 3000;
            }
        }
        // 口に送られる
        else if(stage === 'sentMouth')
        {
            let a;
            if(Math.floor(wait/1000)>=2) a = 0;
            else if(Math.floor(wait/1000)>=1) a = 1;
            else a = 2;
            dora.sprite.setRange((1 + a)/4, 0/16, 1/4, 1/16);
            if(a===0)
            {
            }
            else if(a===1)
            {
                kemo.sprite.translate(-136, 0);
            }
            else if(a===2)
            {
                kemo.sprite.translate(-118, 64);
                kemo.sprite.setRange(1/4,2/4,1/4,1/4);
                kemo.sprite.scale(-32, 32);
            }
        }
        // 腹に送られる
        else if(stage === 'sentStomach')
        {
            let a;
            if(Math.floor(wait/1000)>=2) a = 0;
            else if(Math.floor(wait/1000)>=1) a = 1;
            else a = 2;
            dora.sprite.setRange((1 + a)/4, 2/16, 1/4, 1/16);
            if(a===0)
            {
                kemo.sprite.scale(-32, 32);
                kemo.sprite.setRange(2/4, 1/4, 1/4, 1/4);
                kemo.sprite.translate(-56, 60);
            }
            else if(a===1)
            {
                kemo.sprite.translate(-64, 0);
            }
            else if(a===2)
            {
                kemo.sprite.translate(-72, -48);
            }
        }
        // 腸に送られる
        else if(stage === 'sentCrotch')
        {
            let a;
            if(Math.floor(wait/1000)>=2) a = 0;
            else if(Math.floor(wait/1000)>=1) a = 1;
            else a = 2;
            dora.sprite.setRange((1 + a)/4, 4/16, 1/4, 1/16);
            if(a===0)
            {
                kemo.sprite.scale(-32, 32);
                kemo.sprite.setRange(2/4, 1/4, 1/4, 1/4);
                kemo.sprite.translate(-80, -80);
            }
            else if(a===1)
            {
                kemo.sprite.translate(-72, -96);
            }
            else if(a===2)
            {
                kemo.sprite.translate(-64, -128);
                kemo.sprite.setRange(1/4,2/4,1/4,1/4);
                kemo.sprite.scale(-32, 32);
            }
        }
        // 尻に送られる
        else if(stage === 'sentHip')
        {
            let a;
            if(Math.floor(wait/1000)>=2) a = 0;
            else if(Math.floor(wait/1000)>=1) a = 1;
            else a = 2;
            dora.sprite.setRange((1 + a)/4, 6/16, 1/4, 1/16);
            if(a===0)
            {
                kemo.sprite.translate(-48, -144);
                kemo.sprite.setRange(1/4,2/4,1/4,1/4);
                kemo.sprite.scale(-32, 32);
            }
            else if(a===1)
            {
                kemo.sprite.translate(0, -150);
            }
            else if(a===2)
            {
                kemo.sprite.translate(48, -160);
            }
        }
        // 排泄される
        else if(stage === 'sentOut')
        {
            let a;
            if(Math.floor(wait/1000)>=2) a = 0;
            else if(Math.floor(wait/1000)>=1) a = 1;
            else a = 2;
            dora.sprite.setRange((1 + a)/4, 8/16, 1/4, 1/16);
            if(a===0)
            {
                kemo.sprite.translate(104, -164);
                kemo.sprite.setRange(1/4,2/4,1/4,1/4);
                kemo.sprite.scale(-32, 32);
            }
            else if(a===1)
            {
                kemo.sprite.translate(128, -168);
                kemo.sprite.setRange(2/4,2/4,1/4,1/4);
            }
            else if(a===2)
            {
                kemo.sprite.translate(128, -192+32);
                kemo.sprite.setRange(1/4,3/4,1/4,1/4);
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
            animation += elapsed;

            drink(1);

            let a;
            if(animation*speedPlay%2000 < 500*strongPlay) a=0;
            else if(animation*speedPlay%2000 < 1000) a=1;
            else if(animation*speedPlay%2000 < 500*strongPlay+1000) a=2;
            else a=3;
            if(savore[currentSavore].animation[a]===0)
            {
                dora.sprite.setRange(0/4, 1/16, 1/4, 1/16);
                kemo.sprite.setRange(1/4, 2/4, 1/4, 1/4);
                kemo.sprite.translate(-80,99);
            }
            else if(savore[currentSavore].animation[a]===1)
            {
                dora.sprite.setRange(1/4, 1/16, 1/4, 1/16);
                kemo.sprite.setRange(2/4, 2/4, 1/4, 1/4);
                kemo.sprite.translate(-80,96);
            }
            else if(savore[currentSavore].animation[a]===2)
            {
                dora.sprite.setRange(2/4, 1/16, 1/4, 1/16);
                kemo.sprite.setRange(3/4, 2/4, 1/4, 1/4);
                kemo.sprite.translate(-80,93);
            }
            else if(savore[currentSavore].animation[a]===3)
            {
                dora.sprite.setRange(3/4, 1/16, 1/4, 1/16);
                kemo.sprite.setRange(3/4, 2/4, 1/4, 1/4);
                kemo.sprite.translate(-77,96);
            }
            else if(savore[currentSavore].animation[a]===4) 
            {
                dora.sprite.setRange(0/4, 2/16, 1/4, 1/16);
                kemo.sprite.setRange(1/4, 2/4, 1/4, 1/4);
                kemo.sprite.translate(-83,96);
            }
        }
        // 腹の中
        else if(stage === 'savore0Stomach')
        {
            drink(1.1);
            animation += elapsed;
            let a;
            if(animation*speedPlay%2000 < 500*strongPlay) a=0;
            else if(animation*speedPlay%2000 < 1000) a=1;
            else if(animation*speedPlay%2000 < 500*strongPlay+1000) a=2;
            else a=3;
            if(savore[currentSavore].animation[a]===0)
            {
                dora.sprite.setRange(0/4, 3/16, 1/4, 1/16);
                kemo.sprite.setRange(1/4, 1/4, 1/4, 1/4);
                kemo.sprite.translate(-85,-80);
            }
            else if(savore[currentSavore].animation[a]===1)
            {
                dora.sprite.setRange(1/4, 3/16, 1/4, 1/16);
                kemo.sprite.setRange(2/4, 1/4, 1/4, 1/4);
                kemo.sprite.translate(-88,-80);
            }
            else if(savore[currentSavore].animation[a]===2)
            {
                dora.sprite.setRange(2/4, 3/16, 1/4, 1/16);
                kemo.sprite.setRange(3/4, 1/4, 1/4, 1/4);
                kemo.sprite.translate(-91,-80);
            }
            else if(savore[currentSavore].animation[a]===3)
            {
                dora.sprite.setRange(3/4, 3/16, 1/4, 1/16);
                kemo.sprite.setRange(3/4, 1/4, 1/4, 1/4);
                kemo.sprite.translate(-88,-77);
            }
            else if(savore[currentSavore].animation[a]===4) 
            {
                dora.sprite.setRange(0/4, 4/16, 1/4, 1/16);
                kemo.sprite.setRange(1/4, 1/4, 1/4, 1/4);
                kemo.sprite.translate(-88,-83);
            }
        }
        // 腸の中
        else if(stage === 'savore0Crotch')
        {
            drink(1.2);
            animation += elapsed;
            let a;
            if(animation*speedPlay%2000 < 500*strongPlay) a=0;
            else if(animation*speedPlay%2000 < 1000) a=1;
            else if(animation*speedPlay%2000 < 500*strongPlay+1000) a=2;
            else a=3;
            if(savore[currentSavore].animation[a]===0)
            {
                dora.sprite.setRange(0/4, 5/16, 1/4, 1/16);
                kemo.sprite.setRange(1/4, 2/4, 1/4, 1/4);
                kemo.sprite.translate(-64,-147);
            }
            else if(savore[currentSavore].animation[a]===1)
            {
                dora.sprite.setRange(1/4, 5/16, 1/4, 1/16);
                kemo.sprite.setRange(2/4, 2/4, 1/4, 1/4);
                kemo.sprite.translate(-64,-144);
            }
            else if(savore[currentSavore].animation[a]===2)
            {
                dora.sprite.setRange(2/4, 5/16, 1/4, 1/16);
                kemo.sprite.setRange(3/4, 2/4, 1/4, 1/4);
                kemo.sprite.translate(-64,-141);
            }
            else if(savore[currentSavore].animation[a]===3)
            {
                dora.sprite.setRange(3/4, 5/16, 1/4, 1/16);
                kemo.sprite.setRange(3/4, 2/4, 1/4, 1/4);
                kemo.sprite.translate(-67,-144);
            }
            else if(savore[currentSavore].animation[a]===4) 
            {
                dora.sprite.setRange(0/4, 6/16, 1/4, 1/16);
                kemo.sprite.setRange(1/4, 2/4, 1/4, 1/4);
                kemo.sprite.translate(-61,-144);
            }
        }
        // 尻の中
        else if(stage === 'savore0Hip')
        {
            drink(1.3);
            animation += elapsed;
            let a;
            if(animation*speedPlay%2000 < 500*strongPlay) a=0;
            else if(animation*speedPlay%2000 < 1000) a=1;
            else if(animation*speedPlay%2000 < 500*strongPlay+1000) a=2;
            else a=3;
            if(savore[currentSavore].animation[a]===0)
            {
                dora.sprite.setRange(0/4, 7/16, 1/4, 1/16);
                kemo.sprite.setRange(3/4, 2/4, 1/4, 1/4);
                kemo.sprite.translate(80,-157);
            }
            else if(savore[currentSavore].animation[a]===1)
            {
                dora.sprite.setRange(1/4, 7/16, 1/4, 1/16);
                kemo.sprite.setRange(2/4, 2/4, 1/4, 1/4);
                kemo.sprite.translate(80,-160);
            }
            else if(savore[currentSavore].animation[a]===2)
            {
                dora.sprite.setRange(2/4, 7/16, 1/4, 1/16);
                kemo.sprite.setRange(1/4, 2/4, 1/4, 1/4);
                kemo.sprite.translate(80,-163);
            }
            else if(savore[currentSavore].animation[a]===3)
            {
                dora.sprite.setRange(3/4, 7/16, 1/4, 1/16);
                kemo.sprite.setRange(3/4, 2/4, 1/4, 1/4);
                kemo.sprite.translate(83,-160);
            }
            else if(savore[currentSavore].animation[a]===4) 
            {
                dora.sprite.setRange(0/4, 8/16, 1/4, 1/16);
                kemo.sprite.setRange(1/4, 2/4, 1/4, 1/4);
                kemo.sprite.translate(77,-160);
            }
        }
        // 口の中後半
        else if(stage === 'savore1Mouth')
        {
            drink(2.0);
            animation += elapsed * 2;
            let a;
            if(animation*speedPlay%2000 < 500*strongPlay) a=0;
            else if(animation*speedPlay%2000 < 1000) a=1;
            else if(animation*speedPlay%2000 < 500*strongPlay+1000) a=2;
            else a=3;
            if(savore[currentSavore].animation[a]===0)
            {
                dora.sprite.setRange(0/4, 1/16, 1/4, 1/16);
                kemo.sprite.setRange(1/4, 2/4, 1/4, 1/4);
                kemo.sprite.translate(-80,99);
            }
            else if(savore[currentSavore].animation[a]===1)
            {
                dora.sprite.setRange(1/4, 1/16, 1/4, 1/16);
                kemo.sprite.setRange(2/4, 2/4, 1/4, 1/4);
                kemo.sprite.translate(-80,96);
            }
            else if(savore[currentSavore].animation[a]===2)
            {
                dora.sprite.setRange(2/4, 1/16, 1/4, 1/16);
                kemo.sprite.setRange(3/4, 2/4, 1/4, 1/4);
                kemo.sprite.translate(-80,93);
            }
            else if(savore[currentSavore].animation[a]===3)
            {
                dora.sprite.setRange(3/4, 1/16, 1/4, 1/16);
                kemo.sprite.setRange(3/4, 2/4, 1/4, 1/4);
                kemo.sprite.translate(-77,96);
            }
            else if(savore[currentSavore].animation[a]===4) 
            {
                dora.sprite.setRange(0/4, 2/16, 1/4, 1/16);
                kemo.sprite.setRange(1/4, 2/4, 1/4, 1/4);
                kemo.sprite.translate(-83,96);
            }
        }
        // 腹の中後半
        else if(stage === 'savore1Stomach')
        {
            drink(2.2);
            animation += elapsed * 2;
            let a;
            if(animation*speedPlay%2000 < 500*strongPlay) a=0;
            else if(animation*speedPlay%2000 < 1000) a=1;
            else if(animation*speedPlay%2000 < 500*strongPlay+1000) a=2;
            else a=3;
            if(savore[currentSavore].animation[a]===0)
            {
                dora.sprite.setRange(0/4, 3/16, 1/4, 1/16);
                kemo.sprite.setRange(1/4, 1/4, 1/4, 1/4);
                kemo.sprite.translate(-85,-80);
            }
            else if(savore[currentSavore].animation[a]===1)
            {
                dora.sprite.setRange(1/4, 3/16, 1/4, 1/16);
                kemo.sprite.setRange(2/4, 1/4, 1/4, 1/4);
                kemo.sprite.translate(-88,-80);
            }
            else if(savore[currentSavore].animation[a]===2)
            {
                dora.sprite.setRange(2/4, 3/16, 1/4, 1/16);
                kemo.sprite.setRange(3/4, 1/4, 1/4, 1/4);
                kemo.sprite.translate(-91,-80);
            }
            else if(savore[currentSavore].animation[a]===3)
            {
                dora.sprite.setRange(3/4, 3/16, 1/4, 1/16);
                kemo.sprite.setRange(3/4, 1/4, 1/4, 1/4);
                kemo.sprite.translate(-88,-77);
            }
            else if(savore[currentSavore].animation[a]===4) 
            {
                dora.sprite.setRange(0/4, 4/16, 1/4, 1/16);
                kemo.sprite.setRange(1/4, 1/4, 1/4, 1/4);
                kemo.sprite.translate(-88,-83);
            }
        }
        // 腸の中後半
        else if(stage === 'savore1Crotch')
        {
            drink(2.4);
            animation += elapsed * 2;
            let a;
            if(animation*speedPlay%2000 < 500*strongPlay) a=0;
            else if(animation*speedPlay%2000 < 1000) a=1;
            else if(animation*speedPlay%2000 < 500*strongPlay+1000) a=2;
            else a=3;
            if(savore[currentSavore].animation[a]===0)
            {
                dora.sprite.setRange(0/4, 5/16, 1/4, 1/16);
                kemo.sprite.setRange(1/4, 2/4, 1/4, 1/4);
                kemo.sprite.translate(-64,-147);
            }
            else if(savore[currentSavore].animation[a]===1)
            {
                dora.sprite.setRange(1/4, 5/16, 1/4, 1/16);
                kemo.sprite.setRange(2/4, 2/4, 1/4, 1/4);
                kemo.sprite.translate(-64,-144);
            }
            else if(savore[currentSavore].animation[a]===2)
            {
                dora.sprite.setRange(2/4, 5/16, 1/4, 1/16);
                kemo.sprite.setRange(3/4, 2/4, 1/4, 1/4);
                kemo.sprite.translate(-64,-141);
            }
            else if(savore[currentSavore].animation[a]===3)
            {
                dora.sprite.setRange(3/4, 5/16, 1/4, 1/16);
                kemo.sprite.setRange(3/4, 2/4, 1/4, 1/4);
                kemo.sprite.translate(-67,-144);
            }
            else if(savore[currentSavore].animation[a]===4) 
            {
                dora.sprite.setRange(0/4, 6/16, 1/4, 1/16);
                kemo.sprite.setRange(1/4, 2/4, 1/4, 1/4);
                kemo.sprite.translate(-61,-144);
            }
        }
        // 尻の中後半
        else if(stage === 'savore1Hip')
        {
            drink(2.6);
            animation += elapsed * 2;
            let a;
            if(animation*speedPlay%2000 < 500*strongPlay) a=0;
            else if(animation*speedPlay%2000 < 1000) a=1;
            else if(animation*speedPlay%2000 < 500*strongPlay+1000) a=2;
            else a=3;
            if(savore[currentSavore].animation[a]===0)
            {
                dora.sprite.setRange(0/4, 7/16, 1/4, 1/16);
                kemo.sprite.setRange(3/4, 2/4, 1/4, 1/4);
                kemo.sprite.translate(80,-157);
            }
            else if(savore[currentSavore].animation[a]===1)
            {
                dora.sprite.setRange(1/4, 7/16, 1/4, 1/16);
                kemo.sprite.setRange(2/4, 2/4, 1/4, 1/4);
                kemo.sprite.translate(80,-160);
            }
            else if(savore[currentSavore].animation[a]===2)
            {
                dora.sprite.setRange(2/4, 7/16, 1/4, 1/16);
                kemo.sprite.setRange(1/4, 2/4, 1/4, 1/4);
                kemo.sprite.translate(80,-163);
            }
            else if(savore[currentSavore].animation[a]===3)
            {
                dora.sprite.setRange(3/4, 7/16, 1/4, 1/16);
                kemo.sprite.setRange(3/4, 2/4, 1/4, 1/4);
                kemo.sprite.translate(83,-160);
            }
            else if(savore[currentSavore].animation[a]===4) 
            {
                dora.sprite.setRange(0/4, 8/16, 1/4, 1/16);
                kemo.sprite.setRange(1/4, 2/4, 1/4, 1/4);
                kemo.sprite.translate(77,-160);
            }
        }

        // 次のステージへ
        if(wait <= 0)
        {
            if(stage === 'title') stage = 'walk';
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
            else if(stage === 'talkMouth') stage = 'savore0Mouth';
            //else if(stage === 'selectMouth') stage = 'savore0Mouth';
            else if(stage === 'savore0Mouth') stage = 'savore1Mouth';
            else if(stage === 'savore1Mouth') stage = 'finishMouth';
            else if(stage === 'finishMouth') stage = 'sentStomach';

            else if(stage === 'sentStomach') stage = 'cryStomach';
            else if(stage === 'cryStomach') stage = 'talkStomach';
            else if(stage === 'talkStomach') stage = 'savore0Stomach';
            //else if(stage === 'selectStomach') stage = 'savore0Stomach';
            else if(stage === 'savore0Stomach') stage = 'savore1Stomach';
            else if(stage === 'savore1Stomach') stage = 'finishStomach';
            else if(stage === 'finishStomach') stage = 'sentCrotch';

            else if(stage === 'sentCrotch') stage = 'cryCrotch';
            else if(stage === 'cryCrotch') stage = 'talkCrotch';
            else if(stage === 'talkCrotch') stage = 'savore0Crotch';
            //else if(stage === 'selectCrotch') stage = 'savore0Crotch';
            else if(stage === 'savore0Crotch') stage = 'savore1Crotch';
            else if(stage === 'savore1Crotch') stage = 'finishCrotch';
            else if(stage === 'finishCrotch') stage = 'sentHip';

            else if(stage === 'sentHip') stage = 'cryHip';
            else if(stage === 'cryHip') stage = 'talkHip';
            else if(stage === 'talkHip') stage = 'savore0Hip';
            //else if(stage === 'selectHip') stage = 'savore0Hip';
            else if(stage === 'savore0Hip') stage = 'savore1Hip';
            else if(stage === 'savore1Hip') stage = 'finishHip';
            else if(stage === 'finishHip') stage = 'sentOut';
            else if(stage === 'dry'){
                stage = 'result';
                setDoraText(dragon + 'たいめのドラゴンさんのなかで、きもちよくて、ひからびちゃった…。');
                dragon = 1;
            }
            
            else if(stage === 'sentOut') stage = 'tired';
            else if(stage === 'tired')
            {
                if(tankCc + damCc > 0)
                {
                    stage = 'walk';
                    setKemoText(ccCry[15 - Math.floor(Math.min(tankCc / 100, 100) * 15)]);
                }
                else
                {
                    stage = 'dry';
                    setDoraText('ぐへへ、もう干からびてたのか。残念だったな。');
                }
            }
            else if(stage === 'result')
            {
                stage = 'title';
            }
            wait = 0;
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

    // タイトルテキスト
    if(stage === 'title')
    {
        damCc = 0;
        tankCc = 100;
        setKemoText('「くわれた」へようこそ。');
        animationTimeStamp = timeStamp;
        longPlay = 1.0;
        speedPlay = 1.0;
        strongPlay = 1.0;
    
        dragonCc = 0;
        dragonTotalCc = 0;
        feel = 0;
        leak = 0.01;
        dragon = 1;
    
        question = -1;
        savoreArray = [0,1,2];
        currentSavore = 0;
        wantToLeak = false;
    
        animation = 0;
        wait = 0;
    
        nextDistance = 512;
        nextRight = true;
        wait = 3000;

        drink(0);

        kemo.sprite.setRange(0/4,0/4,1/4,1/4);
        kemo.sprite.scale(32,32);
        dora.sprite.scale(192,192);
        kemo.sprite.translate(0,-192+32);
        dora.sprite.translate(512,0);

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
                strongPlay = 1.0;
                stage = 'findTheDragon';
                setKemoText(colorArray[dora.colorNumber].kemoColorName+'のドラゴンさんだ。どうしよう。');
                kemo.sprite.setRange(0/4, 0/4, 1/4, 1/4)
                wait = 3000;
            }
        }
        if(nextDistance <= -640)
        {
            nextDistance = 320;
            nextRight = true;
            let d;
            d = randomInt(3);
            if(d)
            {
                nextObject = 'dragon';
                wantToLeak = randomInt(3);
                dora.sprite.setRange(0/4,0/16,1/4,1/16);
                dora.sprite.x = Math.floor(nextDistance + 128);
                dora.colorNumber = randomInt(6);
                dora.sprite.setColor(
                    colorArray[dora.colorNumber].middle,
                    colorArray[dora.colorNumber].light,
                    colorArray[dora.colorNumber].dark,
                );
                bar[2].sprite.setColor(
                    colorArray[dora.colorNumber].middle,
                    colorArray[dora.colorNumber].light,
                    colorArray[dora.colorNumber].dark,
                );
                dora.sprite.scale(192,192);
                dragon++;
            }
            else
            {
                nextObject = 'juice';
                juiceArray = randomArray(6, 3);
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
        let r = randomInt(2);
        if(r===0)
        {
            setDoraText('今、蹴ったな。罰としてかなり強めに味わってやる。');
            strongPlay += 0.4;
            kemo.sprite.setRange(2/4, 1/4, 1/4, 1/4);
            dora.sprite.setRange(1/4, 0/16, 1/4, 1/16);
            dora.sprite.translate(0,0);
            kemo.sprite.translate(-128,-48);
            bar[2].sprite.translate(240, 0);
            bar[2].sprite.setColor(
                colorArray[dora.colorNumber].middle,
                colorArray[dora.colorNumber].light,
                colorArray[dora.colorNumber].dark,
            );
        }
        else if(r===1)
        {
            setDoraText('悪い子だ。長く強く激しいお仕置きだ。');
            longPlay += 0.2;
            speedPlay += 0.2;
            strongPlay += 0.2;
            kemo.sprite.setRange(2/4, 1/4, 1/4, 1/4);
            dora.sprite.setRange(1/4, 0/16, 1/4, 1/16);
            dora.sprite.translate(0,0);
            kemo.sprite.translate(-128,-48);
            bar[2].sprite.translate(240, 0);
            bar[2].sprite.setColor(
                colorArray[dora.colorNumber].middle,
                colorArray[dora.colorNumber].light,
                colorArray[dora.colorNumber].dark,
            );
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
            setKemoText('たべないで！');
        else if(r===1)
            setKemoText('やめて！');
        else if(r===2)
            setKemoText('いやあああ！');
        else if(r===3)
            setKemoText('だめえええ！');
        dora.sprite.setRange(1/4, 0/16, 1/4, 1/16);
        wait = 3000;
    }
    // 口へ送る
    else if(stage === 'sentMouth')
    {
        let r = randomInt(4);
        if(r===0)
            setDoraText('いただきます。');
        else if(r===1)
            setDoraText('ではいただくぞ。');
        else if(r===2)
            setDoraText('せいぜいがんばれよ。');
        else if(r===3)
            setDoraText('まずは口の中で遊んでやる。');
        wait = 3000;
        currentSavore = randomInt(6);
    }
    // 腹へ送る
    else if(stage === 'sentStomach')
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
        wait = 3000;
        currentSavore = randomInt(6);
    }
    // 腸へ送る
    else if(stage === 'sentCrotch')
    {
        let r = randomInt(4);
        if(r===0)
            setDoraText('股ぐらへ送ってやる。');
        else if(r===1)
            setDoraText('今度は股ぐらで遊んでやる。');
        else if(r===2)
            setDoraText('股ぐらへ落ちろ。');
        else if(r===3)
            setDoraText('きついのはこれからだぞ。');
        wait = 3000;
        currentSavore = randomInt(6);
    }
    // 尻へ送る
    else if(stage === 'sentHip')
    {
        let r = randomInt(4);
        if(r===0)
            setDoraText('尻へ送ってやる。');
        else if(r===1)
            setDoraText('今度は尻で遊んでやる。');
        else if(r===2)
            setDoraText('尻に入れてやる。');
        else if(r===3)
            setDoraText('最後は一番きついから覚悟しろ。');
        wait = 3000;
        currentSavore = randomInt(6);
    }
    // 排泄する
    else if(stage === 'sentOut')
    {
        let r = randomInt(4);
        if(r===0)
            setDoraText('そろそろ出してやる。');
        else if(r===1)
            setDoraText('終わりだ。頑張ったな。');
        else if(r===2)
            setDoraText('もう出してやろう。');
        else if(r===3)
            setDoraText('ぐへへ、気持ちよかったな。');
        wait = 3000;
    }
    // 疲れて動けない
    else if(stage === 'tired')
    {
        let r = randomInt(4);
        if(r===0)
            setKemoText('ひいいい…。');
        else if(r===1)
            setKemoText('はあ、はあ、はあ、…。');
        else if(r===2)
            setKemoText('もう、だめ、…。');
        else if(r===3)
            setKemoText('やっと、おわった…。');
        wait = 6000;
        kemo.sprite.x = 0;
        nextDistance = -256;
        dora.sprite.x = Math.floor(nextDistance + 128);
        dora.sprite.setRange(1/4, 1/16, 1/4, 1/16);
        dora.sprite.scale(-192, 192);
        bar[2].sprite.translate(512, 0);
        bar[2].sprite.scale(8,0);
    }
    // 口
    else if(stage === 'talkMouth')
    {
        if(loopInt(kemo.colorNumber + 1, 6) === dora.colorNumber)
        {
            speedPlay += 0.2;
            setDoraText(colorArray[kemo.colorNumber].doraColorName + 'の子は滑りがよいから好物なのだ。では口の中で'+savore[currentSavore].suru+'ぞ。');
            wait = 3000;
        }
        else if(loopInt(kemo.colorNumber - 1, 6) === dora.colorNumber)
        {
            longPlay += 0.2;
            setDoraText(colorArray[kemo.colorNumber].doraColorName + 'の子は食べ応えがあって好物なのだ。では口の中で'+savore[currentSavore].suru+'ぞ。');
            wait = 3000;
        }
        else if(kemo.colorNumber === dora.colorNumber)
        {
            strongPlay += 0.2;
            setDoraText(colorArray[kemo.colorNumber].doraColorName + 'の子は大好物なのだ。口の中で強く'+savore[currentSavore].suru+'から覚悟しろよ。');
            wait = 3000;
        }
        else
        {
            setDoraText(
                'まずは口で'+
                savore[currentSavore].sound+
                savore[currentSavore].sound+
                savore[currentSavore].shite+
                'やる。気持ちいから覚悟しろ。'
            );
            wait = 3000;
        }
    }
    // 腹
    else if(stage === 'talkStomach')
    {
        let r = randomInt(2);
        if(r===0)
            setDoraText('どうだ、腹の中はもっときついだろ。');
        else if(r===1)
            setDoraText(
                '次は腹で、'+
                savore[currentSavore].sound+
                savore[currentSavore].sound+
                savore[currentSavore].shite+
                'やる。気持ちよすぎても耐えろ。'
            );
        wait = 3000;
    }
    // 腸
    else if(stage === 'talkCrotch')
    {
        let r = randomInt(2);
        if(r===0)
            setDoraText('股ぐらの中はどうだ、更にきついだろ。');
        else if(r===1)
            setDoraText(
                '次は股ぐらで、'+
                savore[currentSavore].sound+
                savore[currentSavore].sound+
                savore[currentSavore].shite+
                'やる。すごく気持ちいから泣くなよ。'
            );
        wait = 3000;
    }
    // 尻
    else if(stage === 'talkHip')
    {
        let r = randomInt(2);
        if(r===0)
            setDoraText('どうだ、尻の中は最高にきついだろ。');
        else if(r===1)
            setDoraText('最後は尻で、'+
            savore[currentSavore].sound+
            savore[currentSavore].sound+
            savore[currentSavore].shite+
            'やる。覚悟しろ。');
        wait = 3000;
    }
    // 口
    else if(stage === 'cryMouth')
    {
        let r = randomInt(4);
        if(r===0)      setKemoText('ボリュームのあるくちに、いれられた…。');
        else if(r===1) setKemoText('きもちよくしてね…。');
        else if(r===2) setKemoText('ドラゴンのくち、きもちい…。');
        else if(r===3) setKemoText('ふかふかのしただ…。');
        wait = 3000;
        dora.sprite.setRange(1/4, 1/16, 1/4, 1/16);
        kemo.sprite.translate(-80, 96);
        kemo.sprite.scale(-32, 32);
        kemo.sprite.setRange(1/4,2/4,1/4,1/4);
    }
    // 腹
    else if(stage === 'cryStomach')
    {
        let r = randomInt(4);
        if(r===0)      setKemoText('おなかのなかに、いれられちゃった…。');
        else if(r===1) setKemoText('にくあつすぎる…。');
        else if(r===2) setKemoText('ボリュームがありすぎる…。');
        else if(r===3) setKemoText('こんなところでされたら…。');
        wait = 3000;
        dora.sprite.setRange(1/4, 3/16, 1/4, 1/16);
        kemo.sprite.translate(-88, -80);
        kemo.sprite.scale(-32, 32);
        kemo.sprite.setRange(1/4,1/4,1/4,1/4);
    }
    // 腸
    else if(stage === 'cryCrotch')
    {
        let r = randomInt(4);
        if(r===0)      setKemoText('またぐらのなかとかきつい…。');
        else if(r===1) setKemoText('きゅうくつだよお…。');
        else if(r===2) setKemoText('こんなところでしないでえ…。');
        else if(r===3) setKemoText('こんなところ、もういやあ…。');
        wait = 3000;
        dora.sprite.setRange(1/4, 5/16, 1/4, 1/16);
        kemo.sprite.translate(-64, -144);
        kemo.sprite.scale(-32, 32);
        kemo.sprite.setRange(1/4,2/4,1/4,1/4);
    }
    // 尻
    else if(stage === 'cryHip')
    {
        let r = randomInt(4);
        if(r===0)      setKemoText('おしりのなか、きついよ…。');
        else if(r===1) setKemoText('こんなところむり…。');
        else if(r===2) setKemoText('おしりとかえっちだよお…。');
        else if(r===3) setKemoText('こんなとこ、もうむりだよお…。');
        wait = 3000;
        dora.sprite.setRange(1/4, 7/16, 1/4, 1/16);
        kemo.sprite.translate(80,-160);
        kemo.sprite.scale(-32, 32);
        kemo.sprite.setRange(1/4,2/4,1/4,1/4);
    }
    // 口で味わうアニメーション前半
    else if(
        stage === 'savore0Mouth'
    )
    {
        let r = randomInt(4);
        if(r===0)      setDoraText('どうだ、'+savore[currentSavore].sa+'れて気持ちいか。');
        else if(r===1) setDoraText('ぐへへ、'+savore[currentSavore].shite+'いて我も美味しいぞ。');
        else if(r===2) setDoraText('この'+savore[currentSavore].shi+'方に耐えられるかな。');
        else if(r===3) setDoraText(
            savore[currentSavore].sound+
            savore[currentSavore].sound+
            savore[currentSavore].sound+'。');
        animation = 0;
        wait = 9000 * longPlay;
    }
    // 口以外で味わうアニメーション前半
    else if(
        stage === 'savore0Stomach' ||
        stage === 'savore0Crotch' ||
        stage === 'savore0Hip'
    )
    {
        let r = randomInt(4);
        if(r===0)      setDoraText('どうだ、'+savore[currentSavore].sa+'れて気持ちいか。');
        else if(r===1) setDoraText('ぐへへ、'+savore[currentSavore].shite+'いて我も気持ちいぞ。');
        else if(r===2) setDoraText('この'+savore[currentSavore].shi+'方に耐えられるかな。');
        else if(r===3) setDoraText(
            savore[currentSavore].sound+
            savore[currentSavore].sound+
            savore[currentSavore].sound+'。');
        animation = 0;
        wait = 9000 * longPlay;
    }
    // 味わうアニメーション後半
    else if(
        stage === 'savore1Mouth' ||
        stage === 'savore1Stomach' ||
        stage === 'savore1Crotch' ||
        stage === 'savore1Hip'
    )
    {
        setKemoText(feelCry[Math.floor(Math.min(feel / 20, 20) * 15)]);
        wait = 9000 * longPlay;
    }
    // 終わりの言葉
    else if(
        stage === 'finishMouth' ||
        stage === 'finishStomach' ||
        stage === 'finishCrotch' || 
        stage === 'finishHip'
    )
    {
        if(wantToLeak)
        {
            if(dragonCc<=0)
            {
                setDoraText('どうした。全然出ないぞ。');
                longPlay -= 0.2;
            }
            else if(dragonCc<10)
            {
                setDoraText('ずいぶんと我慢しているようだな。もっと出せ。');
                longPlay += 0.2;
                strongPlay += 0.2;
                speedPlay += 0.2;
            }
            else if(dragonCc<20)
            {
                setDoraText('少ししか出さなかったな。もっと出せ。');
                longPlay += 0.2;
                strongPlay += 0.2;
            }
            else if(dragonCc<30)
            {
                setDoraText('出る量が少なめだな。もっと出せ。');
                strongPlay += 0.2;
            }
            else if(dragonCc<40) setDoraText('よしよし、適量出したな。えらいぞ。');
            else if(dragonCc<50) setDoraText('よしよし、多めに出したな。えらいぞ。');
            else setDoraText('たっぷり出したな。えらいぞ。');
        }
        else
        {
            if(dragonCc<=0)
            {
                setDoraText('どうした。全然出ないぞ。');
                longPlay -= 0.2;
            }
            else if(dragonCc<10)       setDoraText('ずいぶんと我慢しているようだな。えらいぞ。');
            else if(dragonCc<20) setDoraText('少ししかおもらししなかったな。えらいぞ。');
            else if(dragonCc<30) setDoraText('出る量が少なめだったな。えらいぞ。');
            else if(dragonCc<40)
            {
                setDoraText('ちょっと出し過ぎだぞ。少しは我慢しろ。');
                strongPlay -= 0.2;
            }
            else if(dragonCc<50)
            {
                setDoraText('多く出し過ぎだ。少しは我慢しろ。');
                longPlay -= 0.2;
                strongPlay -= 0.2;
            }
            else
            {
                setDoraText('大量に出し過ぎだ。少しは我慢しろ。');
                longPlay -= 0.2;
                strongPlay -= 0.2;
                speedPlay -= 0.2;
            }
        }
        dragonCc = 0;
        wait = 3000;
    }
    else if(
        stage === 'dry'
    )
    {
        wait = 3000;
    }
    else if(
        stage === 'result'
    )
    {
        wait = 6000;
    }
    else if(
        stage === 'toTitle'
    )
    {
    }

    draw();

    previousTimeStamp = timeStamp;
    requestAnimationFrame(animate);
};
animate(0);

