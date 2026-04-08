class linkedList {
    constructor() {
        this.head = null;
        // this.next = null;
        this.size = 0;
    }

    append(value) {
        const node = new Node(value);
        let current;

        if (this.head === null) {
            this.head = node;
        } else {
            current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = node;
            console.log(`Current: ${current.value}, Next: ${current.next.value}`); // Debugging statement
        }

        this.size++;
    }

    prepend(value) {
        const node = new Node(value);

        if (this.head === null) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }

        this.size++;
    }

    getSize() {
        return this.size;
    }

    getHead() {
        if (this.size === 0) {
            return undefined;
        }
        return this.head;
    }

    getTail() {
        if (this.size === 0) {
            return undefined;
        }
        let current = this.head;

        while (current.next) {
            current = current.next;
        }

        return current;
    }

    getNodeAt(index) {
        if (index < 0 || index >= this.size) {
            return undefined;
        }
        let current = this.head;
        let count = 0;

        while (count < index) {
            current = current.next;
            count++;
        }

        return current;
    }

    display() {
        let currNode = this.head;
        console.log(currNode.value);
        while (!(currNode.next == null)) {
            console.log(currNode.next.value);
            currNode = currNode.next;
        }
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// list = new linkedList();
// list.append("Shemai");
// list.append("Ruth");
// list.append("Jason");
// list.append("Zeal");
// list.display();

export { linkedList };    