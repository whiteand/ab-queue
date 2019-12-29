interface INode<T> {
  value: T;
  next: INode<T> | null;
}

class Queue<T> implements Iterable<T> {
  public first: INode<T> | null;
  public last: INode<T> | null;
  public length: number;

  constructor(iterable?: Iterable<T>) {
    this.first = null;
    this.last = null;
    this.length = 0;
    if (iterable) {
      for (const item of iterable) {
        this._push(item);
      }
    }
  }

  public push(...items: T[]): Queue<T> {
    for (const item of items) {
      this._push(item);
    }
    return this;
  }

  public pop(): T {
    if (!this.first) {
      throw new Error("Queue is empty");
    }

    const first = this.first;
    this.first = this.first.next;
    this.length--;
    return first.value;
  }

  public [Symbol.iterator]() {
    let current = this.first;
    return {
      next() {
        if (!current) {
          return { done: true as true, value: undefined };
        }
        const value = current.value;
        current = current.next;
        return { value, done: false };
      }
    };
  }
  private _push(item: T): Queue<T> {
    this.length++;
    if (!this.first) {
      this.first = {
        next: null,
        value: item
      };
      this.last = this.first;
      return this;
    }
    const newItem = {
      next: null,
      value: item
    };
    this.last!.next = newItem;
    this.last = newItem;
    return this;
  }
}

export default Queue;
