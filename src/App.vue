<template>
  <v-app>
      <v-app-bar color="grey-lighten-2"></v-app-bar>
      <v-navigation-drawer color="grey-darken-2"></v-navigation-drawer>
      <v-main>
        <v-container>
          <v-card height="200px">
            <v-dialog fullscreen>
              <template #activator="{ props }">
                <v-btn v-bind="props">open</v-btn>
                </template>
              <v-card height="200">
                <v-card-title>Open</v-card-title>
              </v-card>
            </v-dialog>
          </v-card>
         </v-container>
      </v-main>
  </v-app>
</template>
