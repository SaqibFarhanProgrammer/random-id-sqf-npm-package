function GetID(length) {
  const mix = "abcdefghijklmnopqrstuvwxyz@)(!&#^!%#@(@_!+|}|<>_+=12345678910";
  const list = mix.split("");
  let result = "";
  const num = length;
  for (let i = 0; i < num + 1; i++) {
    result += list[Math.floor(Math.random() * list.length)];
  }

  return result;
}
const id = GetID(30);
