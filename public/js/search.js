console.log("!!!!!!!!!!!!!!!!!!!!!!!! search js");


function filterNames(){
    let filterValue = document.getElementById('filterInput').value.toUpperCase();
    console.log(filterValue);
    let tbody = document.getElementById('names');
    console.log(tbody);
    let tr = totleEmployee = tbody.querySelectorAll('tr.collection-item');
    // console.log(tr.length);
    var totleEmployee;
    console.log(totleEmployee.length+"PPPPPPPPPPPPPPPPPPPP");
    for(let i = 0; i < tr.length; i++){
        let td = tr[i].getElementsByTagName('a')[0];
        console.log(td);
        if(td.innerHTML.toUpperCase().indexOf(filterValue)>-1){
            tr[i].style.display = '';
        } else {
            tr[i].style.display = 'none';
        }
    }
    setTimeout(() => {
        var data = [];
        var ctx = document.getElementById("myChart");
        var tbodyDep = document.getElementById('department-names');
        var tr = tbodyDep.querySelectorAll('tr.collection-item-department');
        console.log(tr.length+"tr length");
    for (let i=0; i<tr.length; i++) {
        let td = tr[i].getElementsByTagName('td')
        data.push(td[0].innerHTML);
    }
    console.log(totleEmployee.length+"+++++++++++++++");
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Totol Departure', 'Totol Employee'],
            datasets: [{
                label: '# of Votes',
                data: [tr.length,totleEmployee.length],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
    },300);
}

function init() {
    console.log("This is javascript");
    let filterInput = document.getElementById('filterInput');
    filterInput.addEventListener('keyup', filterNames);
    filterNames();
}

window.onload = function() {
    init();
}
