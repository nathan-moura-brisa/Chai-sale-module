import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-budgets-pap',
  template: `<h1>PAP done!</h1>`,
  imports: [],
  standalone: true,
})
export default class BudgetsPAPComponent implements OnInit {
  destroyRef = inject(DestroyRef);

  constructor() {}

  ngOnInit() {
    // document.cookie = "NovoRevan=eyJhdXRoIjp7ImFkbWluaXN0cmFkb3IiOjEsImNoYXQiOltdLCJjaGF0X2hhYmlsaXRhZG8iOjAsImNoYXRfaWQiOi0xLCJjaWRhZGVfaWQiOjIsImNvZGlnb191c3VhcmlvIjoiZGUzNjFlNzYtMmI5Yi00NWUzLWJmNmYtZTFlMGY5M2JhMWM4IiwiZGVwYXJ0YW1lbnRvX2dlcmVudGUiOjAsImRlcGFydGFtZW50b19pZCI6NDMsImRlcGFydGFtZW50b19ub21lIjoiQXRlbmRpbWVudG8gYW8gQ2xpZW50ZSIsImVtYWlsIjoibmF0YW4ubW91cmFAZ3J1cG9icmlzYW5ldC5jb20uYnIiLCJlcXVpcGVfaWQiOm51bGwsImVycm9yX2NoYXQiOiIiLCJmdW5jaW9uYXJpb19pZCI6OTIyNCwiaWQiOjg2OTIsImltYWdlbSI6bnVsbCwibG9naW4iOiIwNjguMjY5LjYxMy03NyIsIm5vbWUiOiJOYXRoYW4gTW91cmEiLCJvdHBfY29uZmlndXJhZG8iOjEsIm90cF9oYWJpbGl0YWRvIjoxLCJwYWd1ZWJyaXNhIjp7ImRvbWluaW9faWQiOjF9LCJwcmVmZXJlbmNpYSI6IntcInRpcG9fbWFwYVwiOiBcImh5YnJpZFwiLCBcImZpcnN0X2xvZ2luX3JhdW1pbFwiOiAwfSIsInJldmFuIjp7ImJ5cGFzcyI6MH0sInNldG9yX2lkIjpudWxsLCJzZXRvcl9ub21lIjpudWxsLCJzZXRvcmVzIjpbeyJzZXRvcl9pZCI6OCwic2V0b3Jfbm9tZSI6IlNpc3RlbWEgQUMiLCJzdXBlcnZpc29yIjp0cnVlfV0sInNldG9yZXNfaWRzIjpbOF0sInNpc3RlbWFfZXN0b3F1ZSI6MSwidGVsZWZvbmUiOiI4ODk5ODU1NjM0MyIsInRva2VuIjoiYzhkMmYxNDY2OWNiMjhiYmY4ZWRiNDExNTJjNWY0ZjI2MGE2OTFjODRiMTA3MTIwYjk2NGE3MjJiYjkwMWRiMiIsInRva2VuX2RhdGFfY3JpYWNhbyI6IjExXC8wM1wvMjAyNSAwOTo1OToxNCIsInZlbmRhX2NhbmFsX2lkIjoxMH0sImV4cGlyZXMiOjE3NDE3ODQzNTh9--7d5755b23088ad047b932489e3dc73fcd3692925";
  }
}
