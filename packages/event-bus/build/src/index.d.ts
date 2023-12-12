export declare function subscribe(eventType: string, callback: (arg: unknown) => void): {
    unsubscribe: () => void;
};
export declare function publish(eventType: string, arg: unknown): void;
