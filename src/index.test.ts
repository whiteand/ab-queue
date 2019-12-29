import Queue from './index';

describe('Queue', () => {
  test('Empty queue', () => {
    const q = new Queue();
    expect(q.length).toBe(0);
    expect(q.first).toBe(null);
    expect(q.last).toBe(null);
    expect(() => q.pop()).toThrowErrorMatchingInlineSnapshot(
      `"Queue is empty"`,
    );
  });
  test('Iteration constructor', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const q = new Queue(arr);
    expect(q.length).toBe(10);
    expect(q.first).toBeTruthy();
    expect(q.last).toBeTruthy();
    expect(q.first!.value).toBe(1);
    expect(q.last!.value).toBe(10);
    expect([...q]).toEqual(arr);
  });
  test('push method', () => {
    const q = new Queue();
    q.push(1);
    expect(q.length).toBe(1);
    const pushRes = q.push(2, 3);
    expect(q.length).toBe(3);
    expect(pushRes).toBe(q);
    expect(q.first!.value).toBe(1);
    expect(q.last!.value).toBe(3);
  });
  test('pop method', () => {
    const q = new Queue([1, 2, 3, 4, 5]);
    expect(q.pop()).toBe(1);
    expect(q.pop()).toBe(2);
    expect(q.pop()).toBe(3);
    expect(q.pop()).toBe(4);
    expect(q.pop()).toBe(5);
    expect(() => q.pop()).toThrowErrorMatchingInlineSnapshot(
      `"Queue is empty"`,
    );
  });
});
