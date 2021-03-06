import React, { memo } from 'react';
import clsx from 'clsx';
function SummaryCell({ column, lastFrozenColumnIndex, row }) {
    const { summaryFormatter: SummaryFormatter, width, left, summaryCellClass } = column;
    const className = clsx('rdg-cell', {
        'rdg-cell-frozen': column.frozen,
        'rdg-cell-frozen-last': column.idx === lastFrozenColumnIndex
    }, typeof summaryCellClass === 'function' ? summaryCellClass(row) : summaryCellClass);
    return (React.createElement("div", { className: className, style: { width, left } }, SummaryFormatter && React.createElement(SummaryFormatter, { column: column, row: row })));
}
export default memo(SummaryCell);
//# sourceMappingURL=SummaryCell.js.map