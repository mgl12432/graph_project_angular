import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { exit } from 'process';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css']
})
export class LinechartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  edit_button:boolean = true;

  indexcount = 0;

  temp:any ={};
 
  xdata:any;
  xydata:any;
  button:any;

  x_disable:any;
  xy_disable:any;

  linedatas: Array<any> = [];


  increase()
  {
    if(this.linedatas.length != 0)
    {
      this.xdata = (( < HTMLInputElement > document.getElementById('x'+this.indexcount)).value);
      this.xydata = (( < HTMLInputElement > document.getElementById('xy'+this.indexcount)).value);

      if(this.xdata == "" || this.xydata == "")
      {
        return false;
      }

      this.linedatas[this.indexcount-1].x_data = this.xdata;
      this.linedatas[this.indexcount-1].xy_data = this.xydata;
      this.linedatas[this.indexcount-1].button = true;
      this.linedatas[this.indexcount-1].disable = true;
    }

    this.indexcount++;

    this.linedatas.push(this.temp);

    this.linedatas[this.indexcount-1] = 
      {
        index   : this.indexcount
      }
      console.log(this.linedatas);
      
  }

  done()
  {
    if(this.linedatas.length != 0)
    {
      this.xdata = (( < HTMLInputElement > document.getElementById('x'+this.indexcount)).value);
      this.xydata = (( < HTMLInputElement > document.getElementById('xy'+this.indexcount)).value);

      if(this.xdata == "" || this.xydata == "")
      {
        this.indexcount--;
        this.linedatas.pop();
        return false;
      }

      this.linedatas[this.indexcount-1].x_data = this.xdata;
      this.linedatas[this.indexcount-1].xy_data = this.xydata;
      this.linedatas[this.indexcount-1].button = true;
      this.linedatas[this.indexcount-1].disable = true;
    }
    if(this.linedatas[this.linedatas.length-1].x_data == null)
    {
      this.indexcount--;
      this.linedatas.pop();
    }

    console.log(this.linedatas);
  }

  edit_button_data(index:any,value:any,operation:any)
  {

    this.xdata = (( < HTMLInputElement > document.getElementById('x'+(index))).value);
    this.xydata = (( < HTMLInputElement > document.getElementById('xy'+(index))).value);
    this.linedatas[index-1].disable = false;

    if(this.xdata == "" || this.xydata == "")
    {
      return 0;
    }


    this.linedatas[index-1].button = value;

    if(operation == true)
    {
      this.xdata = (( < HTMLInputElement > document.getElementById('x'+(index))).value);
      this.xydata = (( < HTMLInputElement > document.getElementById('xy'+(index))).value);

      this.linedatas[index-1].x_data = this.xdata;
      this.linedatas[index-1].xy_data = this.xydata;
      this.linedatas[index-1].disable = true;
    }
    console.log(this.linedatas);
    
      
  }




  canvas:any;
  ctx:any;

  x:any=[];
  xy:any=[];

  gen()
  {
    this.x=[];
    this.xy=[];

    // this.x=["jan","feb",'mar','apr','may','jun','jul','aug','sep','oct','nov','dec']
    // this.xy=[20,60,79,35,128,57,-19,25,89,70,46,65]

    if(this.linedatas[this.linedatas.length-1].x_data == null)
    {
      this.indexcount--;
      this.linedatas.pop();
    }

    for(let i=0; i<this.linedatas.length;i++)
    {
      this.x.push(this.linedatas[i].x_data);
      this.xy.push(this.linedatas[i].xy_data);
    }
    
    this.canvas = <HTMLCanvasElement> document.getElementById('line');

    this.ctx = this.canvas.getContext('2d');

    let line = new Chart(this.ctx,
      {
        type:'line',
        data: {
          labels: this.x,
          datasets: [{
              label: '# of Votes',
              data: this.xy,
              backgroundColor:'transparent',
              pointBorderColor: 'black',
              borderColor: 'black',
              steppedLine:false,
              showLine:true,
              borderWidth:2,
              borderJoinStyle: "round",
          }]
      },
      options: {
      }
      });
  }
}
