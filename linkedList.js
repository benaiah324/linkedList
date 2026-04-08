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

    pop() {
        if (this.size === 0) {
            return undefined;
        }
        const poppedNode = this.head;
        this.head = this.head.next;
        this.size--;
        return poppedNode;
    }

    contains(value) {
        let current = this.head;

        while (current) {
            if (current.value === value) {
                return true;
            }
            current = current.next;
        }

        return false;
    }

    getIndex(value) {
        let current = this.head;
        let index = 0;

        while (current) {
            if (current.value === value) {
                return index;
            }
            current = current.next;
            index++;
        }

        return -1;
    }

    toString() {
        let current = this.head;
        let result = "";

        while (current) {
            result += current.value;
            if (current.next) {
                result += ", ";
            }
            current = current.next;
        }

        return result;
    }

    insertAt(index, ...values) {
        if (index < 0 || index > this.size) {
            throw new RangeError("Index out of bounds");
        }

        const nodes = values.map(value => new Node(value));

        if (index === 0) {
            nodes[nodes.length - 1].next = this.head;
            this.head = nodes[0];
        } else {
            let current = this.head;
            for (let i = 0; i < index - 1; i++) {
                current = current.next;
            }
            nodes[nodes.length - 1].next = current.next;
            current.next = nodes[0];
        }

        this.size += values.length;
    }

    removeAt(index) {
        if (index < 0 || index >= this.size) {
            throw new RangeError("Index out of bounds");
        }

        let removedNode;

        if (index === 0) {
            removedNode = this.head;
            this.head = this.head.next;
        } else {
            let current = this.head;
            for (let i = 0; i < index - 1; i++) {
                current = current.next;
            }
            removedNode = current.next;
            current.next = current.next.next;
        }

        this.size--;
        return removedNode;
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