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

    test("Test 7: Should remove the head node from the list", () => {
        expect(list.pop().value).toBe("Shemai");
        expect(list.getHead().value).toBe("Ruth");
        expect(list.getSize()).toEqual(2);
    });

    test("Test 8: Should return undefined when trying to pop from an empty list", () => {
        list.pop();
        list.pop();
        list.pop();
        expect(list.pop()).toBeUndefined();
    });

    test("Test 9: Should return true if the passed value is in the list and false otherwise", () => {
        expect(list.contains("Shemai")).toBe(true);
        expect(list.contains("Ruth")).toBe(true);
        expect(list.contains("Jason")).toBe(true);
        expect(list.contains("Sam")).toBe(false);
    });

    test("Test 10: Should return the index of the given node or -1 if not found", () => {
        expect(list.getIndex("Shemai")).toBe(0);
        expect(list.getIndex("Ruth")).toBe(1);
        expect(list.getIndex("Jason")).toBe(2);
        expect(list.getIndex("Sam")).toBe(-1);
    });

    test("Test 11: Should represent the list as a string and print it", () => {
        expect(list.toString()).toBe("Shemai, Ruth, Jason");
    });

    test("Test 12: Should insert new single or multiple nodes with given values at the given index in the list.throw RangeError if index is out of bounds", () => {
        expect(() => {
            list.insertAt(5, "Sam");
        }).toThrow(RangeError);
        list.insertAt(1, "Sam", "Zeal");
        expect(list.getNodeAt(1).value).toBe("Sam");
        expect(list.getSize()).toBe(5);
    });

    test("Test 13: Should remove the node at the given index in the list and return it. Throw RangeError if index is out of bounds", () => {
        expect(() => {
            list.removeAt(5);
        }).toThrow(RangeError);
        expect(list.removeAt(1).value).toBe("Ruth");
        expect(list.getSize()).toBe(2);
    });
});