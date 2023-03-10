function jsFunction() {
    var sel = document.getElementById("choose").value;
    document.getElementById('display').style.display = "none";
    document.getElementById("cmpr_area").style.visibility = "hidden";
    document.getElementById("cmpr-head").style.visibility = "hidden";
    alive();

    if (sel == "none") {
        {
            document.getElementById('heading').innerHTML = "Process Scheduling";


        }
    }
    if (sel == "fcfs") {
        document.getElementById('heading').innerHTML = "First Come First Serve";

        document.getElementById('fcfs').style.display = "block";
        document.getElementById('rr').style.display = "none";
        document.getElementById('pp').style.display = "none";
        document.getElementById('srtf').style.display = "none";

        document.getElementById('prpr').style.display = "none";
        document.getElementById('priority').style.display = "none";

    }
    else if (sel == "srtf") {
        document.getElementById('heading').innerHTML = 'Shortest Remaining Time First';

        document.getElementById('fcfs').style.display = "none";
        document.getElementById('rr').style.display = "none";
        document.getElementById('pp').style.display = "none";
        document.getElementById('srtf').style.display = "block";

        document.getElementById('prpr').style.display = "none";
        document.getElementById('priority').style.display = "none";

    }
    else if (sel == "rr") {

        document.getElementById('heading').innerHTML = "Round Robin";
        document.getElementById('fcfs').style.display = "none";
        document.getElementById('rr').style.display = "block";
        document.getElementById('pp').style.display = "none";
        document.getElementById('srtf').style.display = "none";

        document.getElementById('prpr').style.display = "block";
        document.getElementById('priority').style.display = "block";
        document.getElementById('prpr').innerHTML = "Enter Time Quantum";

        var input = document.getElementById("priority");
        input.value = "1";
    }
    else if (sel == "pp") {

        document.getElementById('heading').innerHTML = "Preemptive Priority Based";
        document.getElementById('fcfs').style.display = "none";
        document.getElementById('rr').style.display = "none";
        document.getElementById('pp').style.display = "block";
        document.getElementById('srtf').style.display = "none";


        document.getElementById('prpr').style.display = "block";
        document.getElementById('priority').style.display = "block";
        document.getElementById('prpr').innerHTML = "Enter Priorities";

        var input = document.getElementById("priority");
        input.value = "1 2 3 4 ";

    }
}

function dead() {
    document.getElementById('fcfs').style.display = "none";
    document.getElementById('rr').style.display = "none";
    document.getElementById('pp').style.display = "none";
    document.getElementById('srtf').style.display = "none";
}
function alive() {
    document.getElementById('tab').style.display = "none";
    document.getElementById('tab1').style.display = "none";
    document.getElementById('tab2').style.display = "none";
    // document.getElementById('tab3').style.display ="none";
}

class Queue {
    constructor() {
        this.elements = {};
        this.head = 0;
        this.tail = 0;
    }
    enqueue(element) {
        this.elements[this.tail] = element;
        this.tail++;
    }
    dequeue() {
        const item = this.elements[this.head];
        delete this.elements[this.head];
        this.head++;
        return item;
    }
    peek() {
        return this.elements[this.head];
    }
    get length() {
        return this.tail - this.head;
    }
    get isEmpty() {
        return this.length === 0;
    }
}


function sh1(){
    const number = document.getElementById("prno").value;
    const str = document.getElementById("arrival").value;
    var s1 = str.trim().split(" ");
    var Arrival = [];
    for (var i = 0; i < s1.length; i++) {
        Arrival[i] = parseInt(s1[i]);
    }

    const str1 = document.getElementById("burst").value;
    const s2 = str1.trim().split(" ");

    var Burst = [];
    for (var i = 0; i < s2.length; i++) {
        Burst[i] = parseInt(s2[i]);
    }

    var t = 0, p = 0, len = Arrival.length - 1;
    // console.log(len);
    var st = "";

    var totaltime = [];
    var turnAroundTime = [];
    var WaitingTime = [];
    var ResponseTime = [];

    var chart;

    while (p < Arrival.length) {
        console.log(t + " " + Arrival[p]);

        if (Arrival[p] <= t) {
            var s = "P" + p + " ";
            st += s.repeat(Burst[p]);
            var v = Burst[p];
            t += parseInt(v);
            totaltime[p] = t;
            turnAroundTime[p] = totaltime[p] - Arrival[p];
            WaitingTime[p] = turnAroundTime[p] - Burst[p];
            ResponseTime[p] = WaitingTime[p];
            p++;

        }
        else {
            var s = "- ";
            st += s;
            t++;
        }
        console.log(st + "\n");
    }

    console.log(ResponseTime);
    chart = st.trim().split(" ");

    var avgtat = 0, avgwt = 0, avgrt = 0;

    for (var i = 0; i < number; i++) {
        avgtat = avgtat + turnAroundTime[i];
        avgwt = avgwt + WaitingTime[i];
        avgrt = avgrt + ResponseTime[i];
        console.log(avgrt);
    }
    avgtat = avgtat / number;
    avgwt = avgwt / number;
    avgrt = avgrt / number;
    console.log(avgrt);

     var res=[avgtat,avgwt,avgrt];
    return res;
}

function sh2(){
    const number = document.getElementById("prno").value;
    const str = document.getElementById("arrival").value;
    var s1 = str.trim().split(" ");
    var Arrival = [];
    for (var i = 0; i < s1.length; i++) {
        Arrival[i] = parseInt(s1[i]);
    }

    const str1 = document.getElementById("burst").value;
    const s2 = str1.trim().split(" ");

    var Burst = [];
    for (var i = 0; i < s2.length; i++) {
        Burst[i] = parseInt(s2[i]);
    }

    var t = 0, p = 0, len = Arrival.length - 1;
    // console.log(len);
    var st = "";

    var totaltime = [];
    var turnAroundTime = [];
    var WaitingTime = [];
    var ResponseTime = [];

    var chart;

    var rt = [];

    for (var i = 0; i < number; i++) {
        rt[i] = Burst[i];
    }

    var done = []
    var complete = 0, t = 0, minm = Number.MAX_VALUE;
    var shortest = 0;
    var check = false;
    st = "";

    while (complete != number) {
        for (var j = 0; j < number; j++) {
            if ((Arrival[j] <= t) && (rt[j] < minm && rt[j] > 0)) {
                minm = rt[j];
                shortest = j;
                check = true;
            }
        }

        if (check == false) {
            var s = "- ";
            st += s;
            t++;
            continue;
        }


        var s = "P" + shortest + " ";
        st += s;

        if (done[shortest] != 1) {
            ResponseTime[shortest] = t - Arrival[shortest];
            done[shortest] = 1;
        }
        rt[shortest]--;
        minm = rt[shortest];

        if (minm == 0) {
            minm = Number.MAX_VALUE;
        }

        if (rt[shortest] == 0) {
            complete++;
            check = false;
            totaltime[shortest] = t + 1;
            turnAroundTime[shortest] = totaltime[shortest] - Arrival[shortest];
            WaitingTime[shortest] = turnAroundTime[shortest] - Burst[shortest];
        }
        t++;
    }

    console.log(ResponseTime);
    chart = st.trim().split(" ");

    var avgtat = 0, avgwt = 0, avgrt = 0;

    for (var i = 0; i < number; i++) {
        avgtat = avgtat + turnAroundTime[i];
        avgwt = avgwt + WaitingTime[i];
        avgrt = avgrt + ResponseTime[i];
        console.log(avgrt);
    }
    avgtat = avgtat / number;
    avgwt = avgwt / number;
    avgrt = avgrt / number;
    console.log(avgrt);

     var res=[avgtat,avgwt,avgrt];
    return res;
}

function sh4(a){
    var sel = document.getElementById("choose").value;
    const number = document.getElementById("prno").value;
    const str = document.getElementById("arrival").value;
    var s1 = str.trim().split(" ");
    var Arrival = [];
    for (var i = 0; i < s1.length; i++) {
        Arrival[i] = parseInt(s1[i]);
    }

    const str1 = document.getElementById("burst").value;
    const s2 = str1.trim().split(" ");

    var Burst = [];
    for (var i = 0; i < s2.length; i++) {
        Burst[i] = parseInt(s2[i]);
    }

    var t = 0, p = 0, len = Arrival.length - 1;
    // console.log(len);
    var st = "";

    var totaltime = [];
    var turnAroundTime = [];
    var WaitingTime = [];
    var ResponseTime = [];

    var chart;

    var q = [];
    var temp = [];
    var turn = [];
    st = "";
    var done = [];
    for (var i = 0; i < number; i++) {
        temp[i] = Burst[i];
    }
    var t = 0;
    var quantum = a;

    while (t < Arrival[0]) {
        t++;
        var s = "- ";
        st += s;
    }

    console.log(t);
    console.log(Arrival[0]);
    var last;

    for (var i = 0; i < number; i++) {
        if (Arrival[i] <= t) {
            console.log(i);
            q.push(i);
            turn[i] = 1;
        }
        else {
            last = i;
            break;
        }
    }
    // console.log("queue : "+q);
    var p = 0;

    while (true) {
        if (p == number)
            break;


        if (Arrival[number - 1] < t && (q.length == 0)) {
            t++;
            var s = "- ";
            st += s;
            break;
        }
        else {

            var ff = q.shift();
            if (done[ff] != 1) {
                ResponseTime[ff] = t - Arrival[ff];
                done[ff] = 1;
            }

            if (temp[ff] > quantum) {
                console.log("if");
                var s = "P" + ff + " ";
                st += s.repeat(quantum);
                t += quantum;
                temp[ff] -= quantum;
            }
            else if (temp[ff] <= quantum) {
                console.log("else");
                var s = "P" + ff + " ";
                st += s.repeat(temp[ff]);
                t += temp[ff];
                temp[ff] = 0;
                p++;

                totaltime[ff] = t;
                turnAroundTime[ff] = totaltime[ff] - Arrival[ff];
                WaitingTime[ff] = turnAroundTime[ff] - Burst[ff];
            }
        }


        for (var i = last; i < number; i++) {
            if (Arrival[i] <= t && temp[i] > 0 && turn[i] != 1) {
                q.push(i);
                turn[i] = 1;
            }
            else {
                last = i;
                break;
            }
        }

        if (temp[ff] > 0)
            q.push(ff);
    }
    console.log(ResponseTime);
    chart = st.trim().split(" ");

    var avgtat = 0, avgwt = 0, avgrt = 0;

    for (var i = 0; i < number; i++) {
        avgtat = avgtat + turnAroundTime[i];
        avgwt = avgwt + WaitingTime[i];
        avgrt = avgrt + ResponseTime[i];
        console.log(avgrt);
    }
    avgtat = avgtat / number;
    avgwt = avgwt / number;
    avgrt = avgrt / number;
    console.log(avgrt);

     var res=[avgtat,avgwt,avgrt];
    return res;

}

function sh3()
{
    const number = document.getElementById("prno").value;
    const str = document.getElementById("arrival").value;
    var s1 = str.trim().split(" ");
    var Arrival = [];
    for (var i = 0; i < s1.length; i++) {
        Arrival[i] = parseInt(s1[i]);
    }

    const str1 = document.getElementById("burst").value;
    const s2 = str1.trim().split(" ");

    var Burst = [];
    for (var i = 0; i < s2.length; i++) {
        Burst[i] = parseInt(s2[i]);
    }

    var t = 0, p = 0, len = Arrival.length - 1;
    // console.log(len);
    var st = "";

    var totaltime = [];
    var turnAroundTime = [];
    var WaitingTime = [];
    var ResponseTime = [];

    var chart;

    const str111 = document.getElementById("priority").value;
    var s1 = str111.trim().split(" ");

    var Priority = [];
    for (var i = 0; i < s1.length; i++) {
        Priority[i] = parseInt(s1[i]);
    }

    var done = []

    if (Priority.length != number) {
        alert("Invalid Priority");
        return;
    }
    
    Priority[number] = 100000;
    var i = 0, j = 0, smallest = 0, count = 0, time = 0;

    var avg = 0, tt = 0, end = 0;

    var x = [];
    st = "";
    for (i = 0; i < number; i++) {
        x[i] = Burst[i];
    }

    for (time = 0; count != number; time++) {
        smallest = number;
        for (i = 0; i < number; i++) {
            if (Arrival[i] <= time && Priority[i] < Priority[smallest] && x[i] > 0)
                smallest = i;
        }

        if (smallest != number) {
            x[smallest]--;
            var s = "P" + smallest + " ";
            st += s;
            if (done[smallest] != 1) {
                ResponseTime[smallest] = time - Arrival[smallest];
                done[smallest] = 1;
            }
        }
        else {
            var s = "- ";
            st += s;
        }

        if (x[smallest] == 0) {
            count++;
            end = time + 1;
            totaltime[smallest] = end;
            WaitingTime[smallest] = end - Arrival[smallest] - Burst[smallest];
            turnAroundTime[smallest] = end - Arrival[smallest];
        }
        console.log(st + "\n");
    }

    console.log(ResponseTime);
    chart = st.trim().split(" ");

    var avgtat = 0, avgwt = 0, avgrt = 0;

    for (var i = 0; i < number; i++) {
        avgtat = avgtat + turnAroundTime[i];
        avgwt = avgwt + WaitingTime[i];
        avgrt = avgrt + ResponseTime[i];
        console.log(avgrt);
    }
    avgtat = avgtat / number;
    avgwt = avgwt / number;
    avgrt = avgrt / number;
    console.log(avgrt);

     var res=[avgtat,avgwt,avgrt];
    return res;
}

function compare() {
    var sel = document.getElementById("choose").value;
    if (sel == "none") {
        alert("Please Select Scheduling type!!");
        return;
    }
    const number = document.getElementById("prno").value;
    const str = document.getElementById("arrival").value;
    var s1 = str.trim().split(" ");
    var Arrival = [];
    for (var i = 0; i < s1.length; i++) {
        Arrival[i] = parseInt(s1[i]);
    }
    // console.log(Arrival);
    const str1 = document.getElementById("burst").value;
    const s2 = str1.trim().split(" ");

    var Burst = [];
    for (var i = 0; i < s2.length; i++) {
        Burst[i] = parseInt(s2[i]);
    }

    if (number != Arrival.length) {
        alert("Invalid Arrival Time");
        return;
    }
    else if (number != Burst.length) {
        alert("Invalid Burst Time");
        return;
    }


    document.getElementById("cmpr-head").innerHTML = "Comparison-Chart";

    if(sel=="fcfs" || sel=="srtf")
    {
        var fcfs=sh1();
        var srtf=sh2();
        var rr=sh4(1);

        var trace1 = {
            x: ['FCFS', 'SRTF','RoundRobin'],
            y: [fcfs[0], srtf[0],rr[0]],
            name: 'Avg TurnAround Time',
            type: 'bar'
        };
    
        var trace2 = {
            x: ['FCFS', 'SRTF', 'RoundRobin'],
            y: [fcfs[1],srtf[1],rr[1]],
            name: 'Avg Waiting Time',
            type: 'bar'
        };
    
        var trace3 = {
            x: ['FCFS', 'SRTF', 'RoundRobin'],
            y: [fcfs[2],srtf[2],rr[2]],
            name: 'Avg Response Time',
            type: 'bar'
        };
    
        var data = [trace1, trace2, trace3];
    
        var layout = { barmode: 'group' };
    
        Plotly.newPlot('cmpr_area', data, layout);
    
    
        document.getElementById("cmpr_area").style.visibility = "visible";
    }
    else if(sel=="rr")
    {
        var quantum = parseInt(document.getElementById("priority").value);
        var fcfs=sh1();
        var srtf=sh2();
        var rr=sh4(quantum);
        var rr1=sh4(1);
        var rr2=sh4(2);
        var rr3=sh4(3);

        var trace1 = {
            x: ['FCFS', 'SRTF','RR','RR : Q=1','RR : Q=2','RR : Q=3'],
            y: [fcfs[0], srtf[0],rr[0],rr1[0],rr2[0],rr3[0]],
            name: 'Avg TurnAround Time',
            type: 'bar'
        };
    
        var trace2 = {
            x: ['FCFS', 'SRTF','RR','RR : Q=1','RR : Q=2','RR : Q=3'],
            y: [fcfs[1], srtf[1],rr[1],rr1[1],rr2[1],rr3[1]],
            name: 'Avg Waiting Time',
            type: 'bar'
        };
    
        var trace3 = {
            x: ['FCFS', 'SRTF','RR','RR : Q=1','RR : Q=2','RR : Q=3'],
            y: [fcfs[2], srtf[2],rr[2],rr1[2],rr2[2],rr3[2]],
            name: 'Avg Response Time',
            type: 'bar'
        };
    
        var data = [trace1, trace2, trace3];
    
        var layout = { barmode: 'group' };
    
        Plotly.newPlot('cmpr_area', data, layout);
    
    
        document.getElementById("cmpr_area").style.visibility = "visible";
       
    }
    else if(sel=="pp")
    {
        var fcfs=sh1();
        var srtf=sh2();
        var rr=sh4(1);
        var pp=sh3();

        var trace1 = {
            x: ['FCFS', 'SRTF','Priority Based','RoundRobin'],
            y: [fcfs[0], srtf[0],pp[0],rr[0]],
            name: 'Avg TurnAround Time',
            type: 'bar'
        };
    
        var trace2 = {
            x: ['FCFS', 'SRTF','Priority Based', 'RoundRobin'],
            y: [fcfs[1],srtf[1],pp[1],rr[1]],
            name: 'Avg Waiting Time',
            type: 'bar'
        };
    
        var trace3 = {
            x: ['FCFS', 'SRTF', 'Priority Based','RoundRobin'],
            y: [fcfs[2],srtf[2],pp[2],rr[2]],
            name: 'Avg Response Time',
            type: 'bar'
        };
    
        var data = [trace1, trace2, trace3];
    
        var layout = { barmode: 'group' };
    
        Plotly.newPlot('cmpr_area', data, layout);
    
    
        document.getElementById("cmpr_area").style.visibility = "visible";
    }

}

function calculate() {

    var sel = document.getElementById("choose").value;
    if (sel == "none") {
        alert("Please Select Scheduling type!!");
        return;
    }
    const number = document.getElementById("prno").value;
    const str = document.getElementById("arrival").value;
    var s1 = str.trim().split(" ");
    var Arrival = [];
    for (var i = 0; i < s1.length; i++) {
        Arrival[i] = parseInt(s1[i]);
    }
    // console.log(Arrival);
    const str1 = document.getElementById("burst").value;
    const s2 = str1.trim().split(" ");

    var Burst = [];
    for (var i = 0; i < s2.length; i++) {
        Burst[i] = parseInt(s2[i]);
    }

    if (number != Arrival.length) {
        alert("Invalid Arrival Time");
        return;
    }
    else if (number != Burst.length) {
        alert("Invalid Burst Time");
        return;
    }


    var t = 0, p = 0, len = Arrival.length - 1;
    // console.log(len);
    var st = "";

    var totaltime = [];
    var turnAroundTime = [];
    var WaitingTime = [];
    var ResponseTime = [];

    var chart;

    // alert(sel);
    if (sel == "fcfs") {
        while (p < Arrival.length) {
            console.log(t + " " + Arrival[p]);

            if (Arrival[p] <= t) {
                var s = "P" + p + " ";
                st += s.repeat(Burst[p]);
                var v = Burst[p];
                t += parseInt(v);
                totaltime[p] = t;
                turnAroundTime[p] = totaltime[p] - Arrival[p];
                WaitingTime[p] = turnAroundTime[p] - Burst[p];
                ResponseTime[p] = WaitingTime[p];
                p++;

            }
            else {
                var s = "- ";
                st += s;
                t++;
            }
            console.log(st + "\n");
        }

        // chart = st.trim().split(" ");
    }
    else if (sel == "srtf") {

        var rt = [];

        for (var i = 0; i < number; i++) {
            rt[i] = Burst[i];
        }

        var done = []
        var complete = 0, t = 0, minm = Number.MAX_VALUE;
        var shortest = 0;
        var check = false;
        st = "";

        while (complete != number) {
            for (var j = 0; j < number; j++) {
                if ((Arrival[j] <= t) && (rt[j] < minm && rt[j] > 0)) {
                    minm = rt[j];
                    shortest = j;
                    check = true;
                }
            }

            if (check == false) {
                var s = "- ";
                st += s;
                t++;
                continue;
            }


            var s = "P" + shortest + " ";
            st += s;

            if (done[shortest] != 1) {
                ResponseTime[shortest] = t - Arrival[shortest];
                done[shortest] = 1;
            }
            rt[shortest]--;
            minm = rt[shortest];

            if (minm == 0) {
                minm = Number.MAX_VALUE;
            }

            if (rt[shortest] == 0) {
                complete++;
                check = false;
                totaltime[shortest] = t + 1;
                turnAroundTime[shortest] = totaltime[shortest] - Arrival[shortest];
                WaitingTime[shortest] = turnAroundTime[shortest] - Burst[shortest];
            }
            t++;
        }

    }
    else if (sel == "pp") {
        const str = document.getElementById("priority").value;
        var s1 = str.trim().split(" ");

        var Priority = [];
        for (var i = 0; i < s1.length; i++) {
            Priority[i] = parseInt(s1[i]);
        }

        var done = []

        if (Priority.length != number) {
            alert("Invalid Priority");
            return;
        }
        Priority[number] = 100000;
        var i = 0, j = 0, smallest = 0, count = 0, time = 0;

        var avg = 0, tt = 0, end = 0;

        var x = [];
        st = "";
        for (i = 0; i < number; i++) {
            x[i] = Burst[i];
        }

        for (time = 0; count != number; time++) {
            smallest = number;
            for (i = 0; i < number; i++) {
                if (Arrival[i] <= time && Priority[i] < Priority[smallest] && x[i] > 0)
                    smallest = i;
            }

            if (smallest != number) {
                x[smallest]--;
                var s = "P" + smallest + " ";
                st += s;
                if (done[smallest] != 1) {
                    ResponseTime[smallest] = time - Arrival[smallest];
                    done[smallest] = 1;
                }
            }
            else {
                var s = "- ";
                st += s;
            }

            if (x[smallest] == 0) {
                count++;
                end = time + 1;
                totaltime[smallest] = end;
                WaitingTime[smallest] = end - Arrival[smallest] - Burst[smallest];
                turnAroundTime[smallest] = end - Arrival[smallest];
            }
            console.log(st + "\n");
        }
        // chart = st.trim().split(" ");
    }
    else if (sel == "rr") {

        var q = [];
        var temp = [];
        var turn = [];
        st = "";
        var done = [];
        for (var i = 0; i < number; i++) {
            temp[i] = Burst[i];
        }
        var t = 0;

        var quantum = parseInt(document.getElementById("priority").value);

        while (t < Arrival[0]) {
            t++;
            var s = "- ";
            st += s;
        }

        console.log(t);
        console.log(Arrival[0]);
        var last;

        for (var i = 0; i < number; i++) {
            if (Arrival[i] <= t) {
                console.log(i);
                q.push(i);
                turn[i] = 1;
            }
            else {
                last = i;
                break;
            }
        }
        // console.log("queue : "+q);
        var p = 0;

        while (true) {
            if (p == number)
                break;

            // console.log("---------------------");
            // console.log("current queue : "+q);
            // console.log("---------------------");

            if (Arrival[number - 1] < t && (q.length == 0)) {
                t++;
                var s = "- ";
                st += s;
                break;
            }
            else {

                var ff = q.shift();
                if (done[ff] != 1) {
                    ResponseTime[ff] = t - Arrival[ff];
                    done[ff] = 1;
                }
                // console.log("---------------------");
                // console.log("pop queue : "+q);
                // console.log("---------------------");
                // console.log(ff);

                if (temp[ff] > quantum) {
                    console.log("if");
                    var s = "P" + ff + " ";
                    st += s.repeat(quantum);
                    t += quantum;
                    temp[ff] -= quantum;
                }
                else if (temp[ff] <= quantum) {
                    console.log("else");
                    var s = "P" + ff + " ";
                    st += s.repeat(temp[ff]);
                    t += temp[ff];
                    temp[ff] = 0;
                    p++;

                    totaltime[ff] = t;
                    turnAroundTime[ff] = totaltime[ff] - Arrival[ff];
                    WaitingTime[ff] = turnAroundTime[ff] - Burst[ff];
                }
            }


            for (var i = last; i < number; i++) {
                if (Arrival[i] <= t && temp[i] > 0 && turn[i] != 1) {
                    q.push(i);
                    turn[i] = 1;
                }
                else {
                    last = i;
                    break;
                }
            }

            // console.log("---------------------");
            // console.log("after new arrival check queue : "+q);
            // console.log("---------------------");

            if (temp[ff] > 0)
                q.push(ff);

            // console.log("---------------------");
            // console.log("after pushing queue : "+q);
            // console.log("---------------------");

            // console.log(st);
        }


    }

    console.log(ResponseTime);
    chart = st.trim().split(" ");

    var avgtat = 0, avgwt = 0, avgrt = 0;

    for (var i = 0; i < number; i++) {
        avgtat = avgtat + turnAroundTime[i];
        avgwt = avgwt + WaitingTime[i];
        avgrt = avgrt + ResponseTime[i];
        console.log(avgrt);
    }


    avgtat = avgtat / number;
    avgwt = avgwt / number;
    avgrt = avgrt / number;
    console.log(avgrt);


    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    table.appendChild(thead);
    table.appendChild(tbody);
    document.getElementById('tab').innerHTML = "";
    document.getElementById('tab').appendChild(table);


    let row_1 = document.createElement('tr');
    let head_0 = document.createElement('th');
    head_0.innerHTML = "Process No.";
    let head_1 = document.createElement('th');
    head_1.innerHTML = "Arrival Time";
    let head_2 = document.createElement('th');
    head_2.innerHTML = "Burst Time";
    let head_3 = document.createElement('th');
    head_3.innerHTML = "Total Time";
    let head_4 = document.createElement('th');
    head_4.innerHTML = "Turn Around Time";
    let head_5 = document.createElement('th');
    head_5.innerHTML = "Waiting Time";
    let head_7 = document.createElement('th');
    head_7.innerHTML = "Response Time";
    if (sel == "pp") {
        let head_6 = document.createElement('th');
        head_6.innerHTML = "Priority";
        row_1.appendChild(head_6);
        const str = document.getElementById("priority").value;
        var s1 = str.trim().split(" ");
        var Priority = [];
        for (var i = 0; i < s1.length; i++) {
            Priority[i] = parseInt(s1[i]);
        }

    }
    row_1.appendChild(head_0);
    row_1.appendChild(head_1);
    row_1.appendChild(head_2);
    row_1.appendChild(head_3);
    row_1.appendChild(head_4);
    row_1.appendChild(head_5);
    row_1.appendChild(head_7);
    thead.appendChild(row_1);


    for (var i = 0; i < number; i++) {
        var v = "row_" + i;
        var v = document.createElement('tr');

        if (sel == "pp") {
            var t = document.createElement('td');
            t.innerHTML = Priority[i];
            v.appendChild(t);
        }

        var t = document.createElement('td');
        t.innerHTML = "P" + i;
        v.appendChild(t);
        var t = document.createElement('td');
        t.innerHTML = Arrival[i];
        v.appendChild(t);
        var t = document.createElement('td');
        t.innerHTML = Burst[i];
        v.appendChild(t);
        var t = document.createElement('td');
        t.innerHTML = totaltime[i];
        v.appendChild(t);
        var t = document.createElement('td');
        t.innerHTML = turnAroundTime[i];
        v.appendChild(t);
        var t = document.createElement('td');
        t.innerHTML = WaitingTime[i];
        v.appendChild(t);
        var t = document.createElement('td');
        t.innerHTML = ResponseTime[i];
        v.appendChild(t);

        tbody.appendChild(v);

    }


    let tat = document.createElement("h3");
    tat.innerHTML = "Average Turn Around Time : " + avgtat;
    tat.className = "text";

    let wt = document.createElement("h3");
    wt.innerHTML = "Average Waiting Time : " + avgwt;
    wt.className = "text";

    let rrt = document.createElement("h3");
    rrt.innerHTML = "Average Response Time : " + avgrt;
    rrt.className = "text";

    let tot = document.createElement("h3");
    tot.innerHTML = "Lower the Number -- Higher the Priority";
    tot.className = "text";


    let table1 = document.createElement('table');
    let thead1 = document.createElement('thead');
    let tbody1 = document.createElement('tbody');


    table1.appendChild(thead1);
    table1.appendChild(tbody1);

    // table2.appendChild(thead2);
    // table2.appendChild(tbody2);

    document.getElementById('tab1').innerHTML = "";
    document.getElementById('tab2').innerHTML = "";
    // document.getElementById('tab3').innerHTML = "";

    if (sel == "pp") {
        document.getElementById('tab2').appendChild(tot);
    }
    document.getElementById('tab2').appendChild(tat);
    document.getElementById('tab2').appendChild(wt);
    document.getElementById('tab2').appendChild(rrt);

    document.getElementById('tab1').appendChild(table1);
    // document.getElementById('tab1').appendChild(table2);


    let row1 = document.createElement('tr');

    for (var i = 0; i < chart.length; i++) {
        var head1 = document.createElement('th');
        head1.innerHTML = chart[i];
        row1.appendChild(head1);
    }
    thead1.appendChild(row1);

    // let row2 = document.createElement('tr');

    // for (var i = 0; i <=chart.length; i++) {
    //     var head1 = document.createElement('th');
    //     head1.innerHTML = i;
    //     row2.appendChild(head1);
    // }
    // thead2.appendChild(row2);

    dead();
    document.getElementById('tab').style.display = "flex";
    document.getElementById('tab1').style.display = "flex";
    // document.getElementById('tab3').style.display = "flex";
    document.getElementById('tab2').style.display = "block";


}

