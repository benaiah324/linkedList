import { linkedList } from "./linkedList";

describe("linkedList", () => {
    let list;

    beforeEach(() => {
        list = new linkedList();
        list.append("Shemai");
        list.append("Ruth");
        list.append("Jason");
    });

    test("Test 1: Should add a node to the end of the list", () => {
        expect(list.head.value).toBe("Shemai");
        expect(list.head.next.value).toBe("Ruth");
        expect(list.head.next.next.value).toBe("Jason");
        expect(list.size).toBe(3);
    });

    test("Test 2: Should add a node to the beginning of the list", () => {
        list.prepend("Sam");
        expect(list.head.value).toBe("Sam");
        expect(list.head.next.value).toBe("Shemai");
        expect(list.head.next.next.value).toBe("Ruth");
        expect(list.head.next.next.next.value).toBe("Jason");
        expect(list.size).toBe(4);
    });

    test("Test 3: Should return the size of the list", () => {
        expect(list.getSize()).toBe(3);
    });

    test("Test 4: Should return the value of the first node", () => {
        expect(list.getHead().value).toBe("Shemai");
    });

    test("Test 5: Should return the value of the last node", () => {
        expect(list.getTail().value).toBe("Jason");
    });

    test("Test 6: Should return the value of the node at the given index in the list", () => {
        expect(list.getNodeAt(0).value).toBe("Shemai");
        expect(list.getNodeAt(1).value).toBe("Ruth");
        expect(list.getNodeAt(2).value).toBe("Jason");
    });
});