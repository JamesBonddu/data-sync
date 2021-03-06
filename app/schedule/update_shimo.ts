import { Subscription } from 'egg';

export default class UpdateShimo extends Subscription {
  static get schedule() {
    return {
      interval: '5m',
      type: 'all', // 指定所有的 worker 都需要执行
      immediate: true,
    };
  }
  async subscribe() {
    const { ctx } = this;
    await ctx.service.github.test();
  }
}
