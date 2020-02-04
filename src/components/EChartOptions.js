export default {

  getOptions: () => {
    
    return {
      title: {
        id: "chartTitle",
        text: "EChart Test",
        show: false
      },
  
      textStyle: {
        //fontFamily: ["Courier New", "Courier", "monospace"]
      },
  
      // line colors (in series)
      color: [
        "#bd3136",
        "#606380",
        "#31bd56",
        "#bd318e",
        "#afbd31",
        "#bd6231"
      ],
  
      legend: {
        top: "5%",
        align: "auto"
      },
  
      tooltip: {
        trigger: "axis",
        backgroundColor: "rgba(255,255,255, 0.95)",
        // borderWidth: 1,
        // borderColor: '#111',
        textStyle: {
          color: "#000"
        }
      },
  
      xAxis: {
        type: "category",
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        }
      },
  
      yAxis: {
        gridIndex: 0,
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: true
          //interval: 10
        }
      },
  
      grid: {
        show: true,
        backgroundColor: "rgba(194, 206, 214, 0.2)"
      },
  
      toolbox: {
        //backgroundColor: 'rgba(241, 241, 243, 1)',
        feature: {
          saveAsImage: {
            show: true,
            title: "Save as image"
          }
        }
      }
    }
  }
  
  
}