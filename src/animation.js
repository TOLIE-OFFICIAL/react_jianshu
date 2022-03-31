export const move = (obj, distence, callback) => {
    //保证只有一个定时器存在
    clearInterval(obj.box_moving);

    //给不同元素指定了不同的定时器
    obj.box_moving = setInterval(function () {
        let step = (distence - obj.offsetLeft) / 10;
        //应保证步长为整数，才能使得obj严格走到要求的位置
        //如果为正值，则向上取整
        //如果为负值，则向下取整
        step = step > 0 ? Math.ceil(step) : Math.floor(step);

        if (obj.offsetLeft == distence) {
            clearInterval(obj.box_moving);
            //回调函数放在定时器停止之后
            //如果存在回调函数，就调用回调函数执行。
            callback && callback();
            /*  if (callback) {
                 callback();
             } */
        }
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15);
}


export const moveUp = (obj, distence, callback) => {
    //保证只有一个定时器存在
    clearInterval(obj.box_moveUp);

    //给不同元素指定了不同的定时器
    obj.box_moveUp = setInterval(function () {
        let step = (distence - window.pageYOffset) / 10;
        //应保证步长为整数，才能使得obj严格走到要求的位置
        //如果为正值，则向上取整
        //如果为负值，则向下取整
        step = step > 0 ? Math.ceil(step) : Math.floor(step);

        if (window.pageYOffset == distence) {
            clearInterval(obj.box_moveUp);
            //回调函数放在定时器停止之后
            //如果存在回调函数，就调用回调函数执行。
            callback && callback();
            /*  if (callback) {
                 callback();
             } */
        }
        window.scroll(0, window.pageYOffset + step)
    }, 15);
}