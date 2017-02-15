/**
 * Created by baoba on 2017/2/15.
 */
var num1 = 0;//第一个运算数
var num2 = 0;//第二个运算数
var hasOperator = false;//有无运算符
var operator = 0;//1：加法，2：减法，3：乘法，4：除法

function setNum(num) {
    var screen = document.getElementById("screen").value;//获取id为screen的控件内容
    if (screen == "0") {//判断当前是否有运算数
        if (hasOperator) {//是否输入运算符
            num1 = parseFloat(screen);//将字符串显示转换为浮点型
        }
        document.getElementById("screen").value = num + "";//将
    } else {
        if (hasOperator) {//有运算符
            num1 = parseFloat(screen);
            document.getElementById("screen").value = num + "";
        } else {
            document.getElementById("screen").value = screen + num;
        }
    }
    hasOperator = false;
}

function setPoint() {
    var screen = document.getElementById("screen").value;
    if (screen == "0") {
        if (hasOperator) {
            num1 = parseFloat(screen);
        }
        document.getElementById("screen").value = "0.";
    } else {
        if (hasOperator) {
            num1 = parseFloat(screen);
            document.getElementById("screen").value = "0.";
        } else {
            document.getElementById("screen").value = screen + ".";
        }
    }
}

function yunsuan(num) {
    document.getElementById("ope").innerHTML = setOperator(num);
    hasOperator = true;
    num2 = parseFloat(document.getElementById("screen").value);
    var result = qiuzhi(num1, num2);
    operator = num;
    document.getElementById("screen").value = result + "";
}

function setOperator(num) {
    switch (num) {
        case 1:
            return "＋";
        case 2:
            return "－";
        case 3:
            return "×";
        case 4:
            return "÷";
    }
}

function qiuzhi(a, b) {//求值
    if (operator == 0) {
        return parseFloat(document.getElementById("screen").value);
    }
    switch (operator) {
        case 1://+
            return a + b;
        case 2://-
            return a - b;
        case 3://x
            return a * b;
        case 4:///
            return a / b;
    }
}

function dengyu() {
    if (operator == 0) {
        return null;
    }
    num2 = num1;
    num1 = parseFloat(document.getElementById("screen").value);
    var result = qiuzhi(num1, num2);
    document.getElementById("screen").value = result + "";
}

function clean() {
    num1 = 0;
    num2 = 0;
    operator = 1;
    document.getElementById("screen").value = "0";
    document.getElementById("ope").innerHTML = "";
}