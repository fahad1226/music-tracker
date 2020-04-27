<template>
	<div class="ml-3 mr-3">
		<v-layout>
			<v-flex xs6>

				<panel title="Update Song">
					<v-text-field					
					label="Title"
					v-model="song_info.title"
					></v-text-field>

					<v-text-field
					v-model="song_info.artist"
					label="artist"
					></v-text-field>		
					<v-text-field
					v-model="song_info.genre"
					label="Genre"
					></v-text-field>					
					<v-text-field
					v-model="song_info.album"
					label="album"
					></v-text-field>

				</panel>

			</v-flex>

			<v-flex xs6 class="ml-2">
				<panel title="Update Song">
					<v-text-field
					v-model="song_info.albumImageUrl"
					label="albumImageUrl"
					></v-text-field>
					<v-text-field
					v-model="song_info.youtubeId"
					label="youtubeId"
					></v-text-field>
					<v-text-field
					v-model="song_info.lyrics"
					label="Lyrics"
					></v-text-field>
					<v-text-field
					label="Tab"
					v-model="song_info.tab"
					></v-text-field> 
				</panel>
			</v-flex>
		</v-layout>
		<v-btn dark block @click="update">
			Update
		</v-btn>

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
			async update() {
				try {	
					await SongsServices.put(this.song_info)
					this.$router.push({name: 'songs'})
				} catch(err) {
					console.log(err);
				}
 
			}
		}
	}	
</script>


<style scoped>

.shape {
	margin-left: 116px;
	margin-top: 20px;
}

</style>

