<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <p>{{ text | reverse}}</p>

                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->

                <p>{{ text | reverse | append-length }}</p>

                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->

                <p>{{reverse}}</p>
                <p>{{appendLength }}</p>

                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->

                <p>{{ appendLength }}</p>

            </div>
        </div>
    </div>
</template>

<script>
    import { appendLengthMixin } from './appendLengthMixin';
    
    export default {
        mixins: [appendLengthMixin],
        data() {
            return {
                text: 'some text'
            }
        },
        filters: {
            reverse(text) {
                return text.split("").reverse().join("");
            }
        },
        computed: {
            reverse() {
                return this.text.split("").reverse().join("");
            },
            //  appendLength() {
                 //return this.text + " (" + this.text.length + ")";
            //  }
        }
    }
</script>

<style>
</style>
