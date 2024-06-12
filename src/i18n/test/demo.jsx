var ttt = i18n.t("腾讯云");
function square(n) {
	return n * n;
}


export function bb() {
	return <Trans><p>另外，<code>i18next-scanner</code> 还有一个很大的缺陷，它只能通过 <code>function</code> 和 <code>attr</code> 来标识提取的内容</p></Trans>
}


export function cc() {
	const count = 1;

	i18n.t('你已选择{{count}}个可操作的账号', {
		count: list.length,
	})

	return <Trans count={{ count }}>您好，{{ username }}，你xxxx有 {{ count }} 条未读消息</Trans>
}
