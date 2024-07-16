<script setup lang="ts">
const router = useRouter()
const routes = router.getRoutes().filter((r) => r.path.lastIndexOf('/') === 0)
const drawerState = useState('drawer', () => true)

const { mobile, lgAndUp, width } = useDisplay()
const drawer = computed({
  get() {
    return drawerState.value || !mobile.value
  },
  set(val: boolean) {
    drawerState.value = val
  },
})
const rail = computed(() => !drawerState.value && !mobile.value)
routes.sort((a, b) => (a.meta?.drawerIndex ?? 99) - (b.meta?.drawerIndex ?? 98))

drawerState.value = lgAndUp.value && width.value !== 1280
</script>

<template>
  <v-navigation-drawer
    v-model="drawer"
    :expand-on-hover="rail"
    :rail="rail"
    floating
  >
    <template #prepend>
      <v-list>
        <v-list-item class="pa-1">
          <template #prepend>
            <v-icon
              icon="custom:vitify-nuxt"
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
    </template>
    <v-list nav density="compact">
      <AppDrawerItem v-for="route in routes" :key="route.name" :item="route" />
    </v-list>
    <v-spacer />
    <template #append>
      <v-list-item class="drawer-footer px-0 d-flex flex-column justify-center">
        <div class="text-caption pt-6 pt-md-0 text-center text-no-wrap">
          &copy; Copyright 2023
          <a
            href="https://github.com/kingyue737"
            class="font-weight-bold text-primary"
            target="_blank"
            >Yue JIN</a
          >
          <span> & </span>
          <a
            href="https://www.nustarnuclear.com/"
            class="font-weight-bold text-primary"
            target="_blank"
            >NuStar</a
          >
        </div>
      </v-list-item>
    </template>
  </v-navigation-drawer>
</template>

<style>
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
    @supports (scrollbar-gutter: stable) {
      scrollbar-gutter: stable;
      > .v-list--nav {
        padding-right: 0;
      }
    }
    &:hover {
      overflow-y: overlay;
    }
  }
  .drawer-footer {
    transition: all 0.2s;
    min-height: 30px;
  }
  .drawer-header-icon {
    opacity: 1 !important;
    height: 1.2em !important;
    width: 1.2em !important;
    transition: all 0.2s;
    margin-right: -10px;
  }
  .v-list-group {
    --prepend-width: 10px;
  }
  .v-list-item {
    transition: all 0.2s;
  }
}
</style>
