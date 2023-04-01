
// モジュールのインポート
import {Render} from   './render.js';
import * as TwoDim from   './two-dim.js';

const EchiBoa = 
{
    Render : Render,
    Graphic : TwoDim.Graphic,
    Sprite : TwoDim.Sprite,
}

// 別ファイルにクラスを公開
export
{
    EchiBoa,
};