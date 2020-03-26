<template>
	<e-chart
		id="echart"
		:autoresize="true"
		:options="chartOptions"
	/>
</template>

<script>
import ECharts from 'vue-echarts'
// import 'echarts/lib/chart/line'
// import 'echarts/lib/chart/bar'
// import 'echarts/lib/component/title'
// import 'echarts/lib/component/legend'
// import 'echarts/lib/component/grid'
// import 'echarts/lib/component/tooltip'
// import 'echarts/lib/component/toolbox'
// import 'echarts/lib/component/dataset'
// import 'echarts/lib/component/axis'

export default {
	name: 'GenericChart',

	props: {
		options: Object,
	},

	components: {
		'e-chart': ECharts,
	}

}
</script>

<style>

</style>