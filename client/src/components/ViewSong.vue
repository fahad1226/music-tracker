<template>
	<div class="container">
		<v-layout>
			<v-flex xs6>
				<panel title="Songs">
					<div class="songs">
						<v-layout>
							<v-flex xs6 height="300px">
								<div class="song-title">
									{{ song_info.title }}
								</div>
								<div class="song-artist">
									{{ song_info.artist }}
								</div>
								<div class="song-album">
									{{ song_info.album }}
								</div>
								<v-btn 	@click="navigateTo({
									name: 'edit',
									params: {
										songId: song_info.id
									}
								})">
								Edit Song
							</v-btn>
						</v-flex>

						<v-flex xs6>
							<img class="album-image" :src="song_info.albumImageUrl" alt="" /> 
							<p>{{ song_info.album }}</p>	
						</v-flex>
					</v-layout>
				</div>
			</panel>
		</v-flex>
		<v-flex class="ml-2" xs-6>
			<panel title="Tab">
				<textarea
				readonly
				v-model="song_info.tab"
				></textarea>

			</panel>
		</v-flex>
	</v-layout>

	<v-layout>
		<v-flex xs6>
			<panel title="YouTube Video">
				<!-- 	<div>
					<a target="_blank" :href="song_info.youtubeId">YouTube</a>
				</div> -->
				<youtube 
				:player-width="500"
				:video-id="song_info.youtubeId">
			</youtube>
		</panel>
	</v-flex>

	<v-flex xs6 class="ml-2">
		<panel title="Lyrics">
			<div class="lyrics">
				{{ song_info.lyrics }}
			</div>
		</panel>
	</v-flex>
</v-layout>
</div>	
</template>
<script>
	import Panel from '@/components/Panel'
	import SongsServices from '@/services/SongsServices'
	export default {
		components: {
			Panel
		},
		data() {
			return {
				song_info: {}
			}
		},
		async mounted() {
			const songId = this.$store.state.route.params.songId;
			this.song_info = (await SongsServices.show(songId)).data
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

textarea {
	margin-left: 10px;
	width: 100%;
	font-family: monospace;
	border: none;
	height: 600px;
	border-style: none;
	border-color: transparent;
	overflow: auto;
	padding: 40px;
}


.lyrics {
	width: 230px;
	font-family: monospace;
	border : none;
	overflow: auto;
	margin-left: 20%;
}
</style>