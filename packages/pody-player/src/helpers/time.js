const SEC_60 = 60;

export const format = (sec) => {
    const minutes = Math.floor(sec / SEC_60);
    const seconds = (sec % SEC_60).toFixed(0);

    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
};

