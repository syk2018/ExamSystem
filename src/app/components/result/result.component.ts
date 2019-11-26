import { Component, OnInit } from '@angular/core';
import { Sturesult } from 'src/app/interfaces/sturesult';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit() {
    this.result = JSON.parse(localStorage.getItem('lastResults'));
    
    for(let i=0; i<this.result.length; i++) {
      if(this.result[i].restotal == 0) {
        this.option.series[0].data[1].value++;
      } else {
        this.option.series[0].data[0].value++;
      }
    }
  }

  result:Sturesult[];

  back() {
    this.router.navigateByUrl('/home');
  }

  option = {
    title : {
        text: '试题结果统计',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['正确题目','错误题目']
    },
    series : [
        {
            name: '结果统计',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:0, name:'正确题目'},
                {value:0, name:'错误题目'},
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
  };
}
