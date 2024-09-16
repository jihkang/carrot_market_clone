
export const throttle = (time: number, callback: (props: unknown) => unknown) => {
    let timer: NodeJS.Timeout | null = null;

    return () => {
        if (timer) {
            return ;
        }
        
        timer = setTimeout(() => {
            callback(this);
            timer = null;
        }, time);
    };
}