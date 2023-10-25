<script setup lang="ts">
// import { routes } from 'vue-router/auto/routes'
const router = useRouter()
const routes = router.getRoutes()
const appStore = useAppStore()
const {
  drawer: drawerStored,
  drawerImage,
  drawerImageShow,
} = storeToRefs(appStore)

const { mobile, lgAndUp, width } = useDisplay()
const drawer = computed({
  get() {
    return drawerStored.value || !mobile.value
  },
  set(val: boolean) {
    drawerStored.value = val
  },
})
const rail = computed(() => !drawerStored.value && !mobile.value)
const gradient = computed(() =>
  useTheme().current.value.dark
    ? 'to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, .7)'
    : 'to bottom, rgba(255, 255, 255, 1) 5%, rgba(255, 255, 255, .8) 80%, rgba(255, 255, 255, 1) 100%',
)
routes.sort((a, b) => (a.meta?.drawerIndex ?? 99) - (b.meta?.drawerIndex ?? 98))

nextTick(() => {
  drawerStored.value = lgAndUp.value && width.value !== 1280
})
</script>

<template>
  <v-navigation-drawer
    v-model="drawer"
    :expand-on-hover="rail"
    :image="drawerImage"
    :rail="rail"
  >
    <template #image="{ image }">
      <v-img
        v-show="drawerImageShow"
        cover
        :gradient="gradient"
        :src="image"
        height="100%"
      />
    </template>
    <template #prepend>
      <v-list dense nav>
        <v-list-item class="pa-1">
          <template #prepend>
            <v-icon
              icon="custom:vitify"
              size="x-large"
              class="drawer-header-icon"
              color="primary"
            />
          </template>
          <v-list-item-title
            class="text-h5 font-weight-bold"
            style="line-height: 2rem"
          >
            Vitify <span class="text-primary">Admin</span>
          </v-list-item-title>
        </v-list-item>
      </v-list>
      <v-divider />
    </template>
    <v-list nav density="compact">
      <AppDrawerItem v-for="route in routes" :key="route.name" :item="route" />
    </v-list>
    <v-spacer />
    <template #append>
      <v-list-item class="drawer-footer px-0 d-flex flex-column justify-center">
        <div class="text-caption pt-6 pt-md-0 text-center">
          &copy; Copyright 2023
          <a
            href="https://github.com/kingyue737"
            class="font-weight-bold"
            target="_blank"
            >Yue JIN</a
          >
          <span> & </span>
          <a
            href="https://www.nustarnuclear.com/"
            class="font-weight-bold"
            target="_blank"
            >NuStar</a
          >
        </div>
      </v-list-item>
    </template>
  </v-navigation-drawer>
</template>

<style lang="scss">
.v-navigation-drawer {
  transition-property: box-shadow, transform, visibility, width, height, left,
    right, top, bottom, border-radius !important;
  overflow: hidden;
  &.v-navigation-drawer--rail {
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    &.v-navigation-drawer--is-hovering {
      border-top-right-radius: 15px;
      border-bottom-right-radius: 15px;
      box-shadow:
        0px 1px 2px 0px rgb(0 0 0 / 30%),
        0px 1px 3px 1px rgb(0 0 0 / 15%);
    }
    &:not(.v-navigation-drawer--is-hovering) {
      .drawer-footer {
        transform: translateX(-160px);
      }
      .drawer-header-icon {
        height: 1em !important;
        width: 1em !important;
      }
      .v-list-group {
        --list-indent-size: 0px;
        --prepend-width: 0px;
      }
    }
  }
  .v-navigation-drawer__content {
    overflow-y: hidden;
    &:hover {
      overflow-y: overlay;
    }
  }
  .drawer-footer {
    transition: all 0.2s;
    min-height: 30px;
    div {
      white-space: nowrap;
    }
    &::after {
      min-height: 0;
    }
  }
  .drawer-header-icon {
    opacity: 1 !important;
    height: 1.2em !important;
    width: 1.2em !important;
    transition: all 0.2s;
  }
  .v-list-group {
    // --list-indent-size: 10px;
    --prepend-width: 10px;
  }
  .v-list-item {
    transition: all 0.2s;
  }
  .v-img__img--contain {
    object-fit: none;
  }
}
</style>
