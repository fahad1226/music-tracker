<template>
	<div>
		<v-layout>
			<v-flex xs6 offset-xs3 >
				<panel title="Add your own Music">
					<v-text-field
					v-model="song.title"
					required
					:rules="[required]"
					label="Title"
					></v-text-field>

					<v-text-field
					required
					:rules="[required]"
					v-model="song.artist"
					label="artist"
					></v-text-field>
					
					<v-text-field
					required
					:rules="[required]"
					v-model="song.genre"
					label="Genre"
					></v-text-field>
					
					<v-text-field
					v-model="song.album"
					required
					:rules="[required]"
					label="album"
					></v-text-field>
					
					<v-text-field
					v-model="song.albumImageUrl"
					label="albumImageUrl"
					></v-text-field>
					
					<v-text-field
					v-model="song.youtubeId"
					required
					:rules="[required]"
					label="youtubeId"
					></v-text-field>
					
					<v-text-field
					v-model="song.lyrics"
					label="Lyrics"
					></v-text-field>
					<v-text-field
					required
					:rules="[required]"
					v-model="song.tab"
					label="Tab"
					></v-text-field> 
					<div class="alert alert-warning" v-if="error">
						{{ error }}
					</div>

					<v-btn @click="create" dark block> 
						+Add
					</v-btn>
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
				song: {
					title: null,
					artist: null,
					genre: null,
					album: null,
					albumImageUrl: null,
					youtubeId: null,
					lyrics: null,
					tab: null
				},
				error: null,
				required: (value) => !! value || 'This Field Is Required.'
			}
		},
		methods: {
			async create() {
				this.error = null
				const areAllFieldsIn = Object
				.keys(this.song)
				.every(key => !! this.song[key])
				if(!areAllFieldsIn) {
					this.error = "please fill all the required fields."
					return 
				}
				try {	
					await SongsServices.post(this.song)
					this.$router.push({name: 'songs'})
				} catch(err) {
					console.log(err);
				}
			}
		}
	}	
</script>

