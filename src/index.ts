const msg: string = "Hello World";
console.log(msg);

//bigint型だと整数しか入らない為、割り切れない結果整数に丸め込まれる
const result: bigint = 5n / 2n;
console.log(result);

//tsではnullよりundefinedを推奨している
const val1 = null;
const val2 = undefined;
console.log(val1, val2);

//型変換
//型変換には暗黙的な型変換(型推論)、明示的な型変換のに種類がある
console.log(Number(true));
console.log(Number(false));

console.log(Number(undefined));


//算術演算子
const sqrt = 2 ** 5; //2の5乗
console.log(sqrt);