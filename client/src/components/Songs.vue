<template>
	<v-layout>
		<v-flex xs6 offset-xs3 >
			<panel title="Songs GEllo">
				<div v-for="song in songs" :key="song.id">
					{{ song.title }}
					{{ song.artist }}
					{{ song.album }}
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
		}
	}
</script>


