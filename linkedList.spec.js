import { linkedList } from "./linkedList";

describe("linkedList", () => {
    let list;

    beforeEach(() => {
        list = new linkedList();
    });

    test("should add a node to the end of the list", () => {
        list.append("Shemai");
        list.append("Ruth");
        list.append("Jason");

        expect(list.head.value).toBe("Shemai");
        expect(list.head.next.value).toBe("Ruth");
        expect(list.head.next.next.value).toBe("Jason");
        expect(list.size).toBe(3);
    });
});