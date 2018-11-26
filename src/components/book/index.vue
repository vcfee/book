<template>
  <div class="layout">
    <Layout>
      <Header class="topHead">
        <Menu mode="horizontal" theme="dark" active-name="1">
          <!--<div class="layout-logo"></div>-->
          <div class="layout-search">
            <Input search enter-button="搜索" placeholder="请输入作者或书名..." @on-search="searchBook"/>
          </div>
          <div class="layout-nav">
            <MenuItem name="1">
              <Icon type="ios-navigate"></Icon>
              完本小说
            </MenuItem>
            <MenuItem name="2">
              <Icon type="ios-keypad"></Icon>
              荒无人烟
            </MenuItem>
            <MenuItem name="3">
              <Icon type="ios-analytics"></Icon>
              荒无人烟
            </MenuItem>
            <MenuItem name="4">
              <Icon type="ios-paper"></Icon>
              荒无人烟
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Layout :style="{margin: '88px 20px 0', background: '#fff'}">
        <Sider hide-trigger :style="{background: '#fff'}">
          <Menu :theme="theme2"  accordion width="auto" @on-select="sort">
            <!--<MenuItem name="全部">全部</MenuItem>-->
            <MenuItem name="都市·娱乐">都市·娱乐</MenuItem>
            <MenuItem name="精校武侠">精校武侠</MenuItem>
            <MenuItem name="精校仙侠">精校仙侠</MenuItem>
            <MenuItem name="精校奇幻">精校奇幻</MenuItem>
            <MenuItem name="精校玄幻">精校玄幻</MenuItem>
            <MenuItem name="精校科幻">精校科幻</MenuItem>
            <MenuItem name="精校灵异">精校灵异</MenuItem>
            <MenuItem name="精校历史">精校历史</MenuItem>
            <MenuItem name="精校军事">精校军事</MenuItem>
            <MenuItem name="精校竞技">精校竞技</MenuItem>
            <MenuItem name="二次元">二次元</MenuItem>
          </Menu>
        </Sider>
        <Layout :style="{padding: '0 24px 0 24px'}">
          <Card>
            <Row>
              <Table stripe height="450" :columns="columns1" :data="data1"></Table>
            </Row>
            <Row>
              <Col align="right">
                <Page :current="model.page" :total="total" :page-size="model.size"
                      :page-size-opts="[10,20,50,100]"
                      @on-change="onChange" @on-page-size-change="onPageSizeChange" show-total
                      show-elevator
                      show-sizer></Page>
              </Col>
            </Row>
          </Card>
          <footer>
            版权所有
          </footer>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>

<script>
export default {
  data () {
    return {
      theme2: 'light',
      model: {
        page: 1,
        size: 10,
        bookSort: null,
        bookName: null,
        bookAuthor: null
      },
      total: 0,

      bookUrl: '',
      isCollapsed: false,
      columns1: [
        // {title: '创建时间', key: 'createTime', ellipsis: true, width: 150},
        {title: '分类', key: 'bookSort', width: 150},
        {title: '书名', key: 'bookName', tooltip: true, width: 200},
        {title: '作者', key: 'bookAuthor', tooltip: true, width: 150},
        // {title: '书名', key: 'bookTag'},
        {title: '简介', key: 'bookDesc', tooltip: true}
      ],
      data1: []
    }
  },
  mounted () {
    this.handleSearch()
  },
  methods: {
    handleSearch () {
      this.$http.get('/bookserver/book/all?' + this.$qs.stringify(this.model, {skipNulls: true})).then((data) => {
        this.data1 = data.data.content
        this.total = data.data.totalElements
      })
    },
    onChange (v) {
      this.model.page = v
      this.handleSearch()
    },
    onPageSizeChange (v) {
      this.model.size = v
      this.onChange(1)
    },
    sort (e) {
      this.model.bookName = null
      this.model.bookAuthor = null
      if (e === '全部') {
        this.model.bookSort = null
      } else {
        this.model.bookSort = e
      }
      this.handleSearch()
    },
    searchBook (e) {
      this.model.bookSort = null
      this.model.bookName = e
      this.model.bookAuthor = e
      this.handleSearch()
    }
  },
  computed: {}
}
</script>

<style scoped>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }
  .layout-search{
    width: 200px;
    height: 30px;
    /*background: #5b6270;*/
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20%;
  }
  .layout-nav{
    width: 420px;
    margin: 0 20px 0 auto;
  }
  .topHead{
    position: fixed;
    width: 100%;
    z-index: 1000;
  }
</style>
