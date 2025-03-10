interface ISubscription<T> {
  guid?: string;
  subject?: ISubject<T>;
  emit: (value: T) => void;
  unsubscribe: () => void;
}

interface ISubject<T> {
  subscribe: (fn: (data: T) => void) => ISubscription<T>;
  removeSubscription: (guid: string) => void;
  next: (data: T) => void;
}

class Subscription<T> implements ISubscription<T> {
  guid?: string;
  subject?: ISubject<T>;
  fn: (data: T) => void;

  constructor(subject: ISubject<T>, fn: (data: T) => void) {
    this.guid = self.crypto.randomUUID();
    this.subject = subject;
    this.fn = fn;
    console.log("Subscription created");
  }

  emit(data: T) {
    console.log("Subscription emitted");
    this.fn(data);
  }

  unsubscribe() {
    if (this.subject && this.guid) this.subject.removeSubscription(this.guid);
  }
}

class Subject<T> implements ISubject<T> {
  data?: T;
  subscriptions: ISubscription<T>[] = [];

  subscribe(fn: (data: T) => void): ISubscription<T> {
    const subscription = new Subscription<T>(this, fn);
    this.subscriptions.push(subscription);
    return subscription;
  }

  removeSubscription(guid: string) {
    const index = this.subscriptions.findIndex((s) => s.guid === guid);
    if (index !== -1) this.subscriptions.splice(index, 1);
  }

  next(data: T) {
    this.data = data;
    for (const subscription of this.subscriptions) {
      subscription.emit(data);
    }
  }
}

// Example usage
const observer = new Subject<string>();

const subscribe1 = observer.subscribe((data) => {
  console.log("Callback 1:", data);
});

observer.subscribe((data: string) => {
  console.log("Callback 2:", data);
});

observer.next("Hello World");

subscribe1.unsubscribe();

observer.next("Goodbye World");
