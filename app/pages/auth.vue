<script setup lang="ts">
import type { DataTableHeader } from 'vuetify'

definePageMeta({
  icon: 'mdi-security',
  title: 'Auth',
  drawerIndex: 4,
  middleware: 'auth',
})

const headers: DataTableHeader[] = [
  { title: 'ID', key: 'id' },
  { title: 'Name', key: 'name' },
  { title: 'Title', key: 'title' },
  { title: 'Email', key: 'email' },
  { title: 'Role', key: 'role' },
  { title: 'Actions', key: 'actions' },
]

const { data: people } = await useFetch('/api/people')

const { loggedIn } = useUserSession()
watch(loggedIn, () => {
  if (!loggedIn.value) {
    navigateTo('/')
  }
})
</script>

<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-card>
          <v-data-table
            :items="people || undefined"
            :headers="headers"
            show-select
          >
            <template #item.role="{ item }">
              <v-chip>{{ item.role }}</v-chip>
            </template>
            <template #item.actions>
              <v-defaults-provider
                :defaults="{
                  VBtn: {
                    size: 20,
                    rounded: 'lg',
                    variant: 'text',
                    class: 'ml-1',
                    color: '',
                  },
                  VIcon: {
                    size: 20,
                  },
                  VTooltip: {
                    location: 'top',
                  },
                }"
              >
                <v-btn v-tooltip="{ text: 'Edit' }" icon="mdi-pencil" />
                <v-btn v-tooltip="{ text: 'Copy' }" icon="mdi-content-copy" />
                <v-btn v-tooltip="{ text: 'Delete' }" icon="mdi-delete" />
              </v-defaults-provider>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
