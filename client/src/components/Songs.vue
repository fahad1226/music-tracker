<template>
	<v-layout>
		<v-flex xs10 offset class="ml-5" >
			<panel title="Songs">
				<div class="songs" v-for="song in songs" :key="song.id">
					
					<v-layout>
						<v-flex xs6>
							<div class="song-title">
								{{ song.title }}
							</div>
							<div class="song-artist">
								{{ song.artist }}
							</div>
							<div class="song-album">
								{{ song.album }}
							</div>
							<v-btn
							@click="navigateTo({
								name: 'view',
								params: {
									songId: song.id
								}
							})" 
							class="shape">
								View Song
							</v-btn>
							
						</v-flex>

						<v-flex xs6>
							<img class="album-image" :src="song.albumImageUrl" alt="">
						</v-flex>
					</v-layout>
				</div>
			</panel>
		</v-flex>
	</v-layout>
	
</template>

<script>
	import Panel from '@/components/Panel'
	import SongsServices from '@/services/SongsServices'
	export default  {
		components: {
			Panel
		},
		data() {
			return {
				songs: []
			}
		},
		async mounted() {
			// get all the songs from backedn database
			this.songs = (await SongsServices.index()).data
		},
		methods: {
			navigateTo(route) {
				this.$router.push(route)
			}
		}
	}
</script>


<style scoped>

.songs {
	padding: 24px;
	height: 230px;
	overflow: hidden;
}



.song-title {
	font-size: 30px;
}

.song-artist {
	font-size: 24px;
}

.song-album {
	font-size: 18px;
}
.album-image{
	width: 70%;
}

.shape {
	margin-left: 116px;
	margin-top: 20px;
}
</style>