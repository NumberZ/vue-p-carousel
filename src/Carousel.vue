<template>
	<div class="m-carousel">
		<div class="m-carousel-wrapper" :style="ulStyle">
			<div class="m-carousel-item" :style="{width:100/count + '%'}" v-for="item in items">
				<img :src="item.src" :alt="item.alt" />
			</div>
		</div>
		<div v-if="showArrows">
			<div class="m-carousel-arrow carousel-arrow-left" 	@click="turn(-1)"></div>
			<div class="m-carousel-arrow carousel-arrow-right"	@click="turn(1)"></div>
		</div>
		<div v-if="showDots">
			<div class="dots-wrapper">
				<span class="carousel-dot" v-for="i in count" :class="{'carousel-dot-selected':(currentIndex === i)}"
				@click="handleDotClick(i)">
				</span>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				currentIndex:0,
				count:this.items.length,
				autoPlayFlag:null
			}
		},
		computed:{
			ulStyle:function(){
				return {
					width:(this.count * 100) + '%',
					left:(-100 * this.currentIndex) + '%',
					transitionDuration:this.speed + 's'
				}
			}
		},
		props:{
			items: {
				type:Array,
				required:true
			},
			autoPlay: {
				type:Boolean,
				required:false,
				default:true
			},
			speed: {
		        type: Number,
		        required: false,
		        default: 1.5
      		},
      		showArrows: {
      			type:Boolean,
      			required:false,
      			default:true
      		},
      		showdots: {
      			type:Boolean,
      			required:false,
      			default:true		
      		},
      		delay: {
      			type:Number,
      			required:false,
      			default:2
      		}
		},
		methods:{
			turn(i) {
				let _i = this.currentIndex + i;
				if(_i < 0) {
					_i = _i + this.count 
				}
				if(_i >= this.count) {
					_i = _i - this.count
				}
				this.currentIndex = _i;
			},
			goPlay() {
				if(this.autoPlay) {
					this.autoPlayFlag = setInterval(() => {
						this.turn(1);
					}, this.delay * 1000)
				}
			},
			pausePlay() {
				clearInterval(this.autoPlayFlag);
			},
			handleDotClick(i) {
				this.currentIndex = i;
			}
		},
		ready() {
			this.goPlay();
		}
	}
</script>
<style>
	* {
		margin:0;
		padding: 0
	}
	.m-carousel{
		overflow: hidden;
		width:100%;
		position: relative;
	}
	.m-carousel .m-carousel-wrapper{
		height: auto;
		overflow: hidden;
		position: relative;
		left: 0;
		transition: left 1s;	
	}
	.m-carousel .m-carousel-item {
		display: inline-block;
		height: 100%;
		text-align: center;
	}	
	.m-carousel .m-carousel-item  > img {
		display: inline-block;
		height: auto;
		max-width: 100%;
	}
	.m-carousel .m-carousel-arrow{
		display: inline-block;
		color: #2196F3;
		position: absolute;
		top: 50%;
		margin-top: -20px;
		z-index: 100;
		padding: 20px;
		cursor: pointer;
		background-position: center;
		background-repeat: no-repeat;
	}
	.m-carousel .m-carousel-arrow.carousel-arrow-right {
	  right: 0;
	  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%232bb8aa'%2F%3E%3C%2Fsvg%3E")
	}
	.m-carousel .m-carousel-arrow.carousel-arrow-left {
	  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%232bb8aa'%2F%3E%3C%2Fsvg%3E");
	  left: 0;
	}
	.m-carousel .dots-wrapper {
		position: absolute;
		width: 100%;
		bottom: 0;
		text-align:center;
	}
	.m-carousel .dots-wrapper .carousel-dot {
		display: inline-block;
		width: 8px;
		height: 8px;
		border: 1px solid #CCC;
		margin: 6px;
		cursor: pointer;
		border-radius: 6px;
	}
	.m-carousel .dots-wrapper .carousel-dot:hover {
		border:1px solid #2bb8aa;
	}
	.m-carousel .dots-wrapper .carousel-dot.carousel-dot-selected{
		background: #2bb8aa;
	}
</style>