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