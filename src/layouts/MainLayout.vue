<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        
        <q-toolbar-title class='absolute-center'>
         Agenda
        </q-toolbar-title>

        
      </q-toolbar>
    </q-header>
    <q-footer>        
        <q-tabs>
        <q-route-tab v-for="link in essentialLinks" :key="link.title"
         :to="link.link"
         :icon="link.icon"
         :label="link.title" />
      </q-tabs>       
    </q-footer>
    <q-drawer
      v-model="leftDrawerOpen"
      :breakpoint="767"
      show-if-above
      bordered
      content-class="bg-primary"
      :width="200"
    >
      <q-list dark> 
        <q-item-label
          header
          class="text-grey-8"
        >
          Navigation
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Todo',
    caption: 'agenda',
    icon: 'list',
    link: '/'
  },
  {
    title: 'Settings',
    caption: 'settings',
    icon: 'settings_applications',
    link: '/settings'
  }
];

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  }
}
</script>
<style lang="scss">
  @media screen and (min-width: 768px){
    .q-footer {
      display: none;
    }
  }
 
  .q-drawer{
    .q-item.q-router-link--active, .q-item--active {
	    color: #D21919;

    }
  }
</style>
