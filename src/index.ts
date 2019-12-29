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

  private _push(item: T): Queue<T> {
    this.length++;
    if (!this.first) {
      this.first = {
        value: item,
        next: null
      };
      this.last = this.first;
      return this;
    }
    const newItem = {
      value: item,
      next: null
    };
    this.last!.next = newItem;
    this.last = newItem;
    return this;
  }

  public push(...items: T[]): Queue<T> {
    for (let i = 0; i < items.length; i++) {
      this._push(items[i]);
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

  [Symbol.iterator]() {
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
}

export default Queue;
