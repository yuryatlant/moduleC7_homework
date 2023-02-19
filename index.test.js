import { revertString } from "./index.js";

describe("тест функции, которая принимает строку и возвращает перевёрнутую строку, т.е.: ", () => {
  it("должны из abc получить cba", () => expect(revertString("abc")).toBe("cba"));
  it("должны из w3_ получить _3w", () => expect(revertString("w3_")).toBe("_3w"));
});
