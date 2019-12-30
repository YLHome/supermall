<template>
  <div class="param-info">
    <table class="info-size" v-if="paramInfo.rule">
      <tr v-for="(item,index) in paramInfo.rule.tables[0]" :key="index">
        <td>{{ item[0] }}</td>
        <td>{{ item[1] }}</td>
        <td>{{ item[2] }}</td>
        <td>{{ item[3] }}</td>
      </tr>
    </table>

    <table v-if="paramInfo.info" class="info-param">
      <tr v-for="(item, index) in paramInfo.info.set" :key="index">
        <td class="param-key">{{ item.key }}</td>
        <td class="param-value">{{ item.value }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props : {
    paramInfo : {
      type : Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
.param-info{
  padding: 20px 15px;
  font-size: 14px;
  border-bottom: 5px solid #f2f5f8;
}
.param-info table{
  width: 100%;
  border-collapse: collapse;
}
.param-info table tr{
  height: 42px;
  border-bottom: 1px solid rgba(100,100,100,.1);
}
.param-key{
  width: 95px;
}
.param-value{
  color: #eb4868;

}
</style>