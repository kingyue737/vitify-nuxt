export default defineNuxtRouteMiddleware(() => {
  const { loggedIn } = useUserSession()

  if (!loggedIn.value) {
    Notify.error('You need to log in to view this page')
    return navigateTo('/')
  }
})
