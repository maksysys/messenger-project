let activeEffect: (() => void) | null = null;
const targetMap = new WeakMap<object, Map<string | symbol, Set<() => void>>>();

function track(target: object, key: string | symbol) {
    if (!activeEffect) return;

    let depsMap = targetMap.get(target);
    if (!depsMap) {
        depsMap = new Map();
        targetMap.set(target, depsMap);
    }

    let dep = depsMap.get(key);
    if (!dep) {
        dep = new Set();
        depsMap.set(key, dep);
    }

    dep.add(activeEffect);
}

function trigger(target: object, key: string | symbol) {
    const depsMap = targetMap.get(target);
    if (!depsMap) return;

    const dep = depsMap.get(key);
    if (!dep) return;

    dep.forEach((effect) => {
        if (effect) effect();
    });
}

function reactive<T extends object>(target: T): T {
    const handler: ProxyHandler<T> = {
        get(target, key, receiver) {
            const result = Reflect.get(target, key, receiver);
            track(target, key);
            return result;
        },
        set(target, key, value, receiver) {
            const result = Reflect.set(target, key, value, receiver);
            trigger(target, key);
            return result;
        },
    };
    return new Proxy(target, handler);
}


function effect(fn: () => void): void {
    activeEffect = fn;
    activeEffect();
    activeEffect = null;
}

export { reactive, effect };
