import { listAS1, listQ1, listQ2, listAS2, listAS3, listQ3, listAS4, listQ4 } from './Data.js'

document.getElementById("gr1").innerHTML = listQ1.map((question, i) => {
    return `<p>Câu hỏi ${i + 1}: ${question.ques}</p>
            <input type="radio" id="q${i + 1}_a" name="q${i + 1}" value="a">
            <label for="q${i + 1}_a">Đúng</label>
            <input type="radio" id="q${i + 1}_b" name="q${i + 1}" value="b">
            <label for="q${i + 1}_b">Sai</label>`
});

document.getElementById("gr2").innerHTML = listQ2.map((question, i) => {
    return `<p>Câu hỏi ${i + 11}: ${question.ques}</p>
             <input type="radio" id="q${i + 1}_a" name="q${i + 11}" value="a">
             <label for="q${i + 11}_a">${question.a}</label>
             <input type="radio" id="q${i + 11}_b" name="q${i + 11}" value="b">
             <label for="q${i + 11}_b">${question.b}</label>
             <input type="radio" id="q${i + 1}_c" name="q${i + 11}" value="c">
             <label for="q${i + 11}_c">${question.c}</label>
             <input type="radio" id="q${i + 11}_d" name="q${i + 11}" value="d">
             <label for="q${i + 11}_d">${question.d}</label>
             `
});

document.getElementById("gr3").innerHTML = listQ3.map((question, i) => {
    return `<p>Câu hỏi ${i + 21}: ${question.ques}</p>
    <input type="checkbox" id="q${i + 21}_a" name="q${i + 21}" value="a">
    <label for="q${i + 21}_a">${question.a}</label><br>
    <input type="checkbox" id="q${i + 21}_b" name="q${i + 21}" value="b">
    <label for="q${i + 21}_b">${question.b}</label><br>    
    <input type="checkbox" id="q${i + 21}_c" name="q${i + 21}" value="c">
    <label for="q${i + 21}_c">${question.c}</label><br>
    <input type="checkbox" id="q${i + 21}_d" name="q${i + 21}" value="d">
    <label for="q${i + 21}_d">${question.d}</label><br>
             `
});

document.getElementById("gr4").innerHTML = listQ4.map((question, i) => {
    return `<p>Câu hỏi ${i + 31}: ${question.ques}</p>
            <textarea id="q${i + 31}" name="q${i + 31}" rows="4" cols="50"></textarea><br>
             `
});



document.getElementById("survey-question").addEventListener("submit", function (event) {
    event.preventDefault();

    let asQ1 = [];
    for (var i = 1; i <= 10; i++) {
        var q1 = document.querySelector(`input[name=q${i}]:checked`);
        q1 = q1 ? q1.value : '';
        asQ1.push(q1);
    }
    const count1 = listAS1.filter((value, index) => value === asQ1[index]).length;

    let asQ2 = [];
    for (var i = 11; i <= 20; i++) {
        var q2 = document.querySelector(`input[name=q${i}]:checked`);
        q2 = q2 ? q2.value : '';
        asQ2.push(q2);
    }
    const count2 = listAS2.filter((value, index) => value === asQ2[index]).length;

    let asQ3 = [];
    for (var i = 21; i <= 30; i++) {
        var as3 = [];
        var q3 = document.querySelectorAll(`input[name="q${i}"]:checked`);
        q3.forEach(function (checkbox) {
            as3.push(checkbox.value);
        })
        asQ3.push(as3);
    }

    const check = (ar1, ar2) => {
        if (ar1.length != ar2.length) {
            return false;
        }
        for (var i = 0; i < ar1.length; i++) {
            if (ar1[i] != ar2[i]) {
                return false;
            }
        }
        return true;
    }

    let count3 = 0;
    for (var i = 0; i < 10; i++) {
        if (check(listAS3[i], asQ3[i])) count3++;
    }



    let asQ4 = [];
    for (var i = 31; i <= 40; i++) {
        var q4 = document.getElementById(`q${i}`);
        q4 = q4 ? q4.value : '';
        asQ4.push(q4);
    }
    const count4 = listAS4.filter((value, index) => value === asQ4[index]).length;

    alert(`Your Score: ${count1 + count2 + count3 + count4}`);

});

