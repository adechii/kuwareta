
// モジュールのインポート
import {Render} from   './render.js';
import * as TwoDim from   './two-dim.js';

const Kuwareta = 
{
    Render : Render,
    Graphic : TwoDim.Graphic,
    Sprite : TwoDim.Sprite,
}

// 別ファイルにクラスを公開
export
{
    Kuwareta,
};