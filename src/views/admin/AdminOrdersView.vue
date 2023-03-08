<template>
  <div class="container">
    <div class="calendar text-center">
      <div class="month">
        <button class="btn btn-outline-primary prev" @click="adjustMonth(-1)">
          <i class="fas fa-angle-left"></i>
        </button>
        <div class="date">
          <h1>{{ calendar.year }}</h1>
          <h2>{{ months[calendar.month] }}</h2>
        </div>
        <div class="btn btn-outline-primary next" @click="adjustMonth(1)">
          <i class="fas fa-angle-right"></i>
        </div>
      </div>
      <div class="weekDay">
        <div>日</div>
        <div>一</div>
        <div>二</div>
        <div>三</div>
        <div>四</div>
        <div>五</div>
        <div>六</div>
      </div>
      <div class="week" v-for="i in 5" :key="'aaa' + i">
        <div
          class="day text-start ps-2"
          v-for="j in 7"
          :key="'aaa' + j"
          :data-date="calendarMonth[(i - 1) * 7 + j - 1].date"
          :data-timestamp="
            new Date(
              calendarMonth[(i - 1) * 7 + j - 1].year,
              calendarMonth[(i - 1) * 7 + j - 1].month,
              calendarMonth[(i - 1) * 7 + j - 1].date
            ).valueOf()
          "
          :class="{
            today:
              calendarMonth[(i - 1) * 7 + j - 1].year === today.year &&
              calendarMonth[(i - 1) * 7 + j - 1].month === today.month &&
              calendarMonth[(i - 1) * 7 + j - 1].date === today.date,
            other: calendarMonth[(i - 1) * 7 + j - 1].month !== calendar.month
          }"
        >
          <p>{{ calendarMonth[(i - 1) * 7 + j - 1].date }}</p>
          <div
            v-if="
              new Date(
                calendarMonth[(i - 1) * 7 + j - 1].year,
                calendarMonth[(i - 1) * 7 + j - 1].month,
                calendarMonth[(i - 1) * 7 + j - 1].date
              ) > Date.now() &&
              calendarMonth[(i - 1) * 7 + j - 1].month == calendar.month &&
              new Date(
                calendarMonth[(i - 1) * 7 + j - 1].year,
                calendarMonth[(i - 1) * 7 + j - 1].month,
                calendarMonth[(i - 1) * 7 + j - 1].date
              ).getDay() === 6
            "
          >
            <button
              @click="booking('??')"
              v-if="
                bookedTime.indexOf(
                  new Date(
                    calendarMonth[(i - 1) * 7 + j - 1].year,
                    calendarMonth[(i - 1) * 7 + j - 1].month,
                    calendarMonth[(i - 1) * 7 + j - 1].date
                  ).setHours(10, 0, 0, 0)
                ) == -1
              "
              type="button"
              :data-session="
                new Date(
                  calendarMonth[(i - 1) * 7 + j - 1].year,
                  calendarMonth[(i - 1) * 7 + j - 1].month,
                  calendarMonth[(i - 1) * 7 + j - 1].date
                ).setHours(10, 0, 0, 0)
              "
              class="btn btn-sm btn-outline-primary"
            >
              10:00
            </button>
            <button
              @click="booking('??')"
              v-if="
                bookedTime.indexOf(
                  new Date(
                    calendarMonth[(i - 1) * 7 + j - 1].year,
                    calendarMonth[(i - 1) * 7 + j - 1].month,
                    calendarMonth[(i - 1) * 7 + j - 1].date
                  ).setHours(14, 0, 0, 0)
                ) == -1
              "
              type="button"
              :data-session="
                new Date(
                  calendarMonth[(i - 1) * 7 + j - 1].year,
                  calendarMonth[(i - 1) * 7 + j - 1].month,
                  calendarMonth[(i - 1) * 7 + j - 1].date
                ).setHours(14, 0, 0, 0)
              "
              class="btn btn-sm btn-outline-primary"
            >
              14:00
            </button>
            <button
              @click="booking('??')"
              v-if="
                bookedTime.indexOf(
                  new Date(
                    calendarMonth[(i - 1) * 7 + j - 1].year,
                    calendarMonth[(i - 1) * 7 + j - 1].month,
                    calendarMonth[(i - 1) * 7 + j - 1].date
                  ).setHours(16, 0, 0, 0)
                ) == -1
              "
              type="button"
              :data-session="
                new Date(
                  calendarMonth[(i - 1) * 7 + j - 1].year,
                  calendarMonth[(i - 1) * 7 + j - 1].month,
                  calendarMonth[(i - 1) * 7 + j - 1].date
                ).setHours(16, 0, 0, 0)
              "
              class="btn btn-sm btn-outline-primary"
            >
              16:00
            </button>
            <button
              @click="booking('??')"
              v-if="
                bookedTime.indexOf(
                  new Date(
                    calendarMonth[(i - 1) * 7 + j - 1].year,
                    calendarMonth[(i - 1) * 7 + j - 1].month,
                    calendarMonth[(i - 1) * 7 + j - 1].date
                  ).setHours(20, 0, 0, 0)
                ) == -1
              "
              type="button"
              :data-session="
                new Date(
                  calendarMonth[(i - 1) * 7 + j - 1].year,
                  calendarMonth[(i - 1) * 7 + j - 1].month,
                  calendarMonth[(i - 1) * 7 + j - 1].date
                ).setHours(20, 0, 0, 0)
              "
              class="btn btn-sm btn-outline-primary"
            >
              20:00
            </button>
          </div>
          <div
            v-else-if="
              new Date(
                calendarMonth[(i - 1) * 7 + j - 1].year,
                calendarMonth[(i - 1) * 7 + j - 1].month,
                calendarMonth[(i - 1) * 7 + j - 1].date
              ) > Date.now() &&
              calendarMonth[(i - 1) * 7 + j - 1].month == calendar.month &&
              (new Date(
                calendarMonth[(i - 1) * 7 + j - 1].year,
                calendarMonth[(i - 1) * 7 + j - 1].month,
                calendarMonth[(i - 1) * 7 + j - 1].date
              ).getDay() === 1 ||
                new Date(
                  calendarMonth[(i - 1) * 7 + j - 1].year,
                  calendarMonth[(i - 1) * 7 + j - 1].month,
                  calendarMonth[(i - 1) * 7 + j - 1].date
                ).getDay() === 2 ||
                new Date(
                  calendarMonth[(i - 1) * 7 + j - 1].year,
                  calendarMonth[(i - 1) * 7 + j - 1].month,
                  calendarMonth[(i - 1) * 7 + j - 1].date
                ).getDay() === 4 ||
                new Date(
                  calendarMonth[(i - 1) * 7 + j - 1].year,
                  calendarMonth[(i - 1) * 7 + j - 1].month,
                  calendarMonth[(i - 1) * 7 + j - 1].date
                ).getDay() === 5)
            "
          >
            <button
              @click="booking('??')"
              v-if="
                bookedTime.indexOf(
                  new Date(
                    calendarMonth[(i - 1) * 7 + j - 1].year,
                    calendarMonth[(i - 1) * 7 + j - 1].month,
                    calendarMonth[(i - 1) * 7 + j - 1].date
                  ).setHours(20, 0, 0, 0)
                ) == -1
              "
              type="button"
              class="btn btn-sm btn-outline-primary"
              :data-session="
                new Date(
                  calendarMonth[(i - 1) * 7 + j - 1].year,
                  calendarMonth[(i - 1) * 7 + j - 1].month,
                  calendarMonth[(i - 1) * 7 + j - 1].date
                ).setHours(20, 0, 0, 0)
              "
            >
              20:00
            </button>
          </div>
          <template v-for="(it, timestamp) in formatOrder" :key="timestamp">
            <template
              v-for="(item, index) in formatOrder[timestamp]"
              :key="'serve' + index"
            >
              <p
                class="booked fs-6"
                @click="selectTempOrder(item)"
                v-if="
                  timestamp ==
                  new Date(
                    calendarMonth[(i - 1) * 7 + j - 1].year,
                    calendarMonth[(i - 1) * 7 + j - 1].month,
                    calendarMonth[(i - 1) * 7 + j - 1].date
                  ).valueOf()
                "
              >
                {{ item.time }} {{ item.user.name }} {{ item.product.title }}
              </p>
            </template>
          </template>
        </div>
      </div>
    </div>
  </div>
  <!-- Button trigger modal -->
  <button
    type="button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#orderModal"
  >
    新增預約/關閉時段
  </button>
  <!-- Modal -->
  <div
    class="modal fade"
    id="orderModal"
    tabindex="-1"
    aria-labelledby="orderModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="orderModalLabel">
            新增預約/關閉時段
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="mb-3 row">
            <label for="orderTime" class="col-sm-2 col-form-label">時段</label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control-plaintext"
                readonly
                id="orderTime"
                value="2023/03/18 20:00"
              />
            </div>
          </div>
          <div class="mb-3 row">
            <label for="userName" class="col-sm-2 col-form-label"
              >名字{{ this.tempOrder.name }}</label
            >
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="userName"
                v-model="this.tempOrder.name"
              />
            </div>
          </div>
          <div class="mb-3 row">
            <label for="userPhone" class="col-sm-2 col-form-label">電話</label>
            <div class="col-sm-10">
              <input type="tel" class="form-control" id="userPhone" />
            </div>
          </div>
          <div class="mb-3 row">
            <label for="userEmail" class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
              <input type="email" class="form-control" id="userEmail" />
            </div>
          </div>
          <div class="mb-3 row">
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                value="closed"
              />
              <label class="form-check-label" for="inlineCheckbox1"
                >關閉時段</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox2"
                value="service"
              />
              <label class="form-check-label" for="inlineCheckbox2">服務</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox3"
                value="course"
              />
              <label class="form-check-label" for="inlineCheckbox3">課程</label>
            </div>
          </div>
          <div class="mb-3 row">
            <label for="" class="col-sm-2 col-form-label"></label>
            <div class="col-sm-10">
              <select class="form-select" aria-label="Default select example">
                <!-- <option value="1">One</option> -->
              </select>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-danger me-auto"
            data-bs-dismiss="modal"
          >
            刪除預約
          </button>
          <button type="button" class="btn btn-primary">儲存編輯</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { RouterLink } from 'vue-router'

const { VITE_URL, VITE_PATH } = import.meta.env
export default {
  data() {
    return {
      months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ],
      orders: [],
      tempOrder: {
        name: 'name',
        phone: '0987654321',
        email: '',
        message: '',
        time: 0,
        product: {
          title: '',
          category: ''
        }
      },
      today: {
        year: 0,
        month: 0,
        date: 0,
        day: 0
      },
      calendar: {
        year: 0,
        month: 0,
        date: 0,
        day: 0
      }
    }
  },
  components: {
    // RouterLink
  },
  methods: {
    getBooked() {
      this.$http
        .get(`${VITE_URL}/api/${VITE_PATH}/admin/orders`)
        .then((res) => {
          // console.log(res.data.orders)
          this.orders = res.data.orders.sort(
            (a, b) => a.user.address - b.user.address
          )
          // console.log(this.orders)
          this.renderSession()
          this.renderOrders()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    selectTempOrder(item) {
      console.log('!!')
      console.log(item)
    },
    setToday() {
      const date = new Date()
      this.today.year = this.calendar.year = date.getFullYear()
      this.today.month = this.calendar.month = date.getMonth() // 0~11
      this.today.date = this.calendar.date = date.getDate()
      this.today.day = this.calendar.day = date.getDay()
    },
    adjustYear(fix) {
      this.calendar.year += fix
    },
    adjustMonth(fix) {
      // this.calendar.month += fix 範圍
      let month = this.calendar.month + fix
      if (month > 11) {
        this.adjustYear(1)
        this.calendar.month = 0
      } else if (month < 0) {
        this.adjustYear(-1)
        this.calendar.month = 11
      } else {
        this.calendar.month = month
      }
    },
    booking(data) {
      console.log(data)
    }
  },
  mounted() {
    this.setToday()
    this.getBooked()
  },
  computed: {
    calendarFirstDay() {
      const mDate = new Date(this.calendar.year, this.calendar.month, 1)
      const date = new Date(
        this.calendar.year,
        this.calendar.month,
        1 - mDate.getDay()
      )
      return {
        year: date.getFullYear(),
        month: date.getMonth(),
        date: date.getDate(),
        day: date.getDay()
      }
    },
    calendarMonth() {
      const data = []
      let date
      for (let i = 0; i < 42; i++) {
        date = new Date(
          this.calendarFirstDay.year,
          this.calendarFirstDay.month,
          this.calendarFirstDay.date + i
        )
        data.push({
          year: date.getFullYear(),
          month: date.getMonth(),
          date: date.getDate(),
          day: date.getDay()
        })
      }
      return data
    },
    formatOrder() {
      const newOrders = {}
      for (const item of this.orders) {
        const key = Object.keys(item.products)[0]
        const product = item.products[key].product
        const day = new Date(Number(item.user.address)).setHours(0, 0, 0, 0)
        if (!newOrders[day]) {
          newOrders[day] = []
        }
        newOrders[day].push({
          product: product,
          user: item.user,
          time: new Date(Number(item.user.address)).getHours() + ':00'
        })
      }
      console.log(newOrders)
      return newOrders
    },
    bookedTime() {
      // 已經被預定的時間
      const time = []
      for (const item of this.orders) {
        time.push(item.user.address * 1)
      }
      return time
    }
  }
}
</script>

<style lang="scss">
.month {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  text-align: center;
}

.month i {
  cursor: pointer;
}
.weekdays {
  display: flex;
  align-items: center;
}

.weekdays div {
  width: calc(100% / 7);
  display: flex;
  justify-content: center;
  align-items: center;
}

.days {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  font-size: 0.3rem;
}

.days div {
  padding: 0.3rem;
  width: calc(100% / 7);
  border: 1px solid;
}
.days button {
  padding: 2px;
  margin-bottom: 5px;
}
.days .booked {
  cursor: pointer;
  // &:hover {
  // color: $secondary
  // }
}

.prev-date,
.next-date {
  opacity: 0.5;
}

.weekDay,
.week {
  display: flex;
  border-bottom: 1px solid #ddd;
}
.weekDay > div {
  flex: 1 1 0%;
  line-height: 30px;
}
.week {
  border-right: 1px solid #ddd;
}
.week > div {
  position: relative;
  flex: 1 1 0%;
  min-height: 90px;
  line-height: 1.5;
  border-left: 1px solid #ddd;
  padding: 10px 0;
}

.today {
  color: #000000;
  background-color: #ece4d8;
}

.other {
  color: #bbb;
  background-color: #ddd;
}
</style>
