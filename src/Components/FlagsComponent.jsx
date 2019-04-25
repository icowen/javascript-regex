import React, { Component } from 'react';

class FlagsComponent extends Component {
    render() {
        return <div className={'flags'}>
            <h2>Flags</h2>
            <p>Flags are used to modify searches from regex. They are concatenated directly
                to the end of a regular expression: <code>\regex\flag</code></p>
            <table>
                <colgroup>
                    <col className={'symbol'}/>
                    <col className={'description'}/>
                    <col className={'symbol'}/>
                    <col className={'description'}/>
                </colgroup>
                <thead>
                    <tr>
                        <th>Symbol</th>
                        <th>Meaning</th>
                        <th>Symbol</th>
                        <th>Meaning</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>i</code></td>
                        <td>Makes the search case insensitive</td>
                        <td><code>g</code></td>
                        <td>Looks for all matches (without it, search only finds the first match)</td>
                    </tr>
                <tr>
                    <td><code>m</code></td>
                    <td>Multiline mode- <code>^</code> and <code>$</code> match at start/end of string and lines</td>
                    <td><code>s</code></td>
                    <td>Dotall mode- allows <code>.</code> to match newlines</td>
                </tr>
                <tr>
                    <td><code>u</code></td>
                    <td>Enables full unicode support</td>
                    <td><code>y</code></td>
                    <td>Sticky mode- Searches for a match at a specific index. Set index with <code>regexp.lastIndex = index</code></td>

                </tr>
                </tbody>
            </table>

        </div>;

    }
}

export default FlagsComponent;